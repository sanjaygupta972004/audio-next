import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    try {
      console.log("Middleware invoked");
      console.log("Token:", req.nextauth.token);
      console.log("URL:", req.nextUrl);
      console.log("User Role:", req.nextauth.token?.role);

      if (req.nextUrl.pathname.startsWith("/createCourse") && req.nextauth.token?.role !== "admin") {
        console.log("Access denied to non-admin user. Redirecting to /denied.");
        return NextResponse.rewrite(new URL("/denied", req.url));
      }
    } catch (error) {
      console.error("Middleware error:", error);
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    }
  }
);

export const config = {
  matcher: ["/createCourse"],
};
