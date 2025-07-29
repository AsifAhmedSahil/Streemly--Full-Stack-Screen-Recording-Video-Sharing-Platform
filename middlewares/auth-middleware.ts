import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function authMiddleware(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers, // no need for next/headers
  });

  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return null; // means "allow to continue"
}
