import NextAuth from 'next-auth/next'
import { AuthOptions } from 'next-auth'
import prisma from '../../../libs/prismaDB'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import bcrypt from 'bcrypt'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'text' },
      },
      async authorize(credentials: any, req) {
        // 檢查信箱及密碼
        if (!credentials.email || !credentials.password) {
          throw new Error('請填寫信箱或密碼!')
        }
        // 檢查用戶存在以及是否輸入密碼
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })
        if (!user || !user?.hashedPassword) {
          throw new Error('不存在此用戶!')
        }
        // 檢查密碼是否一致
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        )
        if (!passwordMatch) {
          throw new Error('請輸入正確的信箱或密碼!')
        }
        return user
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
  },
  debug: process.env.NODE_EN === 'development',
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub
      return session
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.sub = user.id
      }
      return token
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
