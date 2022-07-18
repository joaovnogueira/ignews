import { query as q } from 'faunadb'

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { fauna } from '../../../services/faunadb'

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

  jwt: {
    
  }

  callbacks: {
    async signIn({ user, account, profile }) {
      const { email } = user

      try{
        await fauna.query(
          q.Create(
            q.Collection('users'),
            {data: { email }}
          )
        )
        return true
      } catch {
        return false
      }
      

    },
  }
})