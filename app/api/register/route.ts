import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// Función para hashear contraseñas con SHA-256
async function hashPassword(password: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

// **Exportamos la función POST en lugar de usar export default**
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

    // Hashear la contraseña y crear el usuario
    const hashedPassword = await hashPassword(password);
    const newUser = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    return NextResponse.json({ message: "Usuario registrado con éxito", user: newUser }, { status: 201 });
  } catch (error) {
    console.error("Error en el registro:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
};
