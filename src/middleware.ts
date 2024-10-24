import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // cek token
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // todo : validate token

  return NextResponse.next();
}

// route guard
export const config = {
  matcher: ["/about/:path*", "/blog/:path*", "/"],
};
