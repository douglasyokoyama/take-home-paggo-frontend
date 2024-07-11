import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const tokenFromOauth = req.cookies.get("token");
  if (
    !tokenFromOauth &&
    !(req.nextUrl.pathname.startsWith("/login"))
  ) {
    console.log(req.nextUrl.pathname)
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/oauth")) {
    const oAuthToken = req.nextUrl.searchParams.get("token") || "";
    if (oAuthToken.length > 0) {
      const response = NextResponse.redirect(new URL("/", req.url));
      const cookie = {
        name: "token",
        value: oAuthToken.toString(),
        maxAge: 60 * 60 * 24 * 7,
      };
      response.cookies.set(cookie);
      return response;
    }
  }

  return NextResponse.next();
}
