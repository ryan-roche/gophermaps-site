// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/download") {
    const userAgent = request.headers.get("user-agent") || "";
    const isMobile = /Mobile|Android|iPhone|iPad|iPod/i.test(userAgent);

    return NextResponse.rewrite(
      new URL(isMobile ? "/download/mobile" : "/download/desktop", request.url),
    );
  }
}

export const config = {
  matcher: "/download",
};
