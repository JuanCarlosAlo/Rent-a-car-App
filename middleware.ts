import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = request.nextUrl;

  // Rutas protegidas (requieren login)
  const protectedRoutes = ["/dashboard", "/payment"];

  // Rutas públicas (redirige si ya hay sesión)
  const publicRoutesForGuests = ["/login", "/register"];

  // Si va a una ruta protegida y NO tiene sesión => redirige al login
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Si va a login/register y ya tiene sesión => redirige al dashboard (o donde quieras)
  if (publicRoutesForGuests.includes(pathname)) {
    if (token) {
      const dashboardUrl = new URL("/dashboard", request.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/payment/:path*",
    "/login",
    "/register"
  ],
};
