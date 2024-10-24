import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const role = request.cookies.get("role")?.value;

  // cek token
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // authorization
  // role admin => "/", "/about", "/blog"
  // role operator => "/", "/blog"
  if (
    request.nextUrl.pathname.startsWith("/about") &&
    role?.toLowerCase() !== "admin"
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// route guard
export const config = {
  matcher: ["/about/:path*", "/blog/:path*", "/"],
};
