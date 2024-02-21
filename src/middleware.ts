import authConfig from './auth.config'
import NextAuth from 'next-auth'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  // !! turns req.auth into a boolean
  const isLoggedIn = !!req.auth
  console.log('Route:', req.nextUrl.pathname)
  console.log('Is Logged In:', isLoggedIn)
})
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
