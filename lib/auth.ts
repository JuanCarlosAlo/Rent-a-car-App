import { prisma } from "@/lib/prisma";

// Función para hashear contraseñas sin bcrypt
async function hashPassword(password: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
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

  const hashedInputPassword = await hashPassword(password);

  if (hashedInputPassword !== user.password) throw new Error("Contraseña incorrecta");

  return user;
}
