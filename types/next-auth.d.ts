import NextAuth from "next-auth";
// next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";


declare module "next-auth" {
  /**
   * Definición de la interfaz User para incluir campos personalizados.
   */
  interface User extends DefaultUser {
    id: string;
    // Otros campos personalizados que desees agregar
  }

  /**
   * Definición de la interfaz Session para incluir los campos personalizados de User.
   */
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string;
    };
  }
}

declare module "next-auth/jwt" {
  /**
   * Definición de la interfaz JWT para incluir campos personalizados.
   */
  interface JWT {
    id: string;
    // Otros campos personalizados que desees agregar
  }
}
