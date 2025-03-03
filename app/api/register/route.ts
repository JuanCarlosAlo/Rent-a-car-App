import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";

export const POST = async (req: Request) => {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Todos los campos son obligatorios" }, { status: 400 });
    }

    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "El email ya está registrado" }, { status: 400 });
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario con sus relaciones (Account y Session)
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        image: null,
        emailVerified: null,
        createdAt: new Date(),
        updatedAt: new Date(),

        // Crear cuenta vinculada
        accounts: {
          create: {
            type: "credentials",
            provider: "credentials",
            providerAccountId: email,
            refresh_token: null,
            access_token: null,
            expires_at: null,
          },
        },

        // Crear sesión vinculada
        sessions: {
          create: {
            sessionToken: randomUUID(),
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Expira en 30 días
          },
        },
      },

      // Incluir relaciones en la respuesta
      include: {
        accounts: true,
        sessions: true,
      },
    });

    return NextResponse.json({
      message: "Usuario registrado con éxito",
      user: newUser,
    }, { status: 201 });

  } catch (error) {
    console.error("Error en el registro:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
};
