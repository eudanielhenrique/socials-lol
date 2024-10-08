import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { FirestoreAdapter } from '@next-auth/firebase-adapter'
import { db } from '../../../src/firebase'
import * as firestoreFunctions from 'firebase/firestore'

export default NextAuth({
  // Adapter
  adapter: FirestoreAdapter({ db: db, ...firestoreFunctions }),

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'undefined',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'undefined'
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    })
  ],

  // The callbacks
  callbacks: {
    async session({ session, user }) {
      session.user = user
      console.log('SESSION:', session)
      return session
    }
  },

  // Secret
  secret: process.env.JWT_SECRET,

  // Pages
  pages: {
    signIn: '/sign-in',
    verifyRequest: '/activate',
    error: '/'
  }
})
