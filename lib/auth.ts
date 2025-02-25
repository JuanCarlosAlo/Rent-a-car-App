import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

// Hashear contraseñas con bcrypt
async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

// Verificar contraseña
async function verifyPassword(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword);
}

// Registrar usuario
export async function registerUser(name: string, email: string, password: string) {
  const hashedPassword = await hashPassword(password);

  return await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
}

// Iniciar sesión
export async function loginUser(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new Error("Usuario no encontrado");

  const isPasswordValid = await verifyPassword(password, user.password);
  if (!isPasswordValid) throw new Error("Contraseña incorrecta");

  return user;
}
