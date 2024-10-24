import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = "";
  console.log("url", request.url);

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return NextResponse.next();
  }
}

// route guard
export const config = {
  matcher: ["/about/:path*", "/blog/:path*", "/"],
};
