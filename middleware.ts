import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import { AUTH_PREFIX, AUTH_ROUTES, UNAUTHENTICATED_USER_REDIRECT, PROTECTED_PAGE } from '@/routes'

export const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const isLoggedIn = !!req.auth

    const isAuthRoutes = AUTH_ROUTES.includes(req.nextUrl.pathname);
    const isApiRoutes = req.nextUrl.pathname.startsWith(AUTH_PREFIX)
    const isProtectPages = req.nextUrl.pathname.includes(PROTECTED_PAGE)

    if (isApiRoutes) return

    if (!isLoggedIn && isProtectPages) {
        return Response.redirect(new URL('/login', req.nextUrl))
    }

    if (isLoggedIn) {
        if (isAuthRoutes) {
            return Response.redirect(new URL('/', req.nextUrl))
        }
        return
    }
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", '/', "/(api|trpc)(.*)"],
}