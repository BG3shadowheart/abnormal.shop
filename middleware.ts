import { NextRequest, NextResponse } from "next/server";

const PC_SITE = "https://abnormal-shop.vercel.app";
const PHONE_SITE = "https://abnormal-store.vercel.app";

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "";

  // Automatically send phones to the mobile deployment and other devices to PC.
  // No chooser page and no client-side JavaScript are involved.
  const isPhone =
    /iPhone|iPod|Android.*Mobile|Windows Phone|IEMobile|Opera Mini|Mobile/i.test(
      userAgent
    );

  const target = new URL(isPhone ? PHONE_SITE : PC_SITE);
  target.pathname = request.nextUrl.pathname;
  target.search = request.nextUrl.search;

  return NextResponse.redirect(target, 307);
}

export const config = {
  // Route incoming page requests through the device detector, while excluding
  // Next.js assets so the router's own static files are not redirected.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
