import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { arcjetMiddleware } from "./middlewares/arcjet-middleware";
import { authMiddleware } from "./middlewares/auth-middleware";


export async function middleware(request: NextRequest,event: NextFetchEvent) {
  // ✅ Step 1: Arcjet protection
   const arcjetResult = await arcjetMiddleware(request, event);
  if (arcjetResult) return arcjetResult;

  // ✅ Step 2: Auth protection
  const authResult = await authMiddleware(request);
  if (authResult) return authResult;

  return NextResponse.next(); // allow to continue
}

// ✅ Same matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
};
