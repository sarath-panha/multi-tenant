// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const url = request.nextUrl;

  // Extract subdomain
  const subdomain = hostname.split(".")[0];

  // Skip if it's the main domain or localhost
  if (
    subdomain === "www" ||
    subdomain === "localhost" ||
    !hostname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Rewrite to tenant-specific path
  if (subdomain && subdomain !== "dentesy") {
    url.pathname = `/tenant/${subdomain}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
