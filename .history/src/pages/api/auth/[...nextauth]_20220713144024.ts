import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { fauna } from '..'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "read:user"
        }
      }
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      return true
    },
  }
})