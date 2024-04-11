import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

import type { NextAuthConfig } from "next-auth"
import { connect } from './utils/connect'
import { User } from './models/user'
import { LoginFormSchema } from './schema/LoginForm'

export default {
    providers: [
        // Credentials({
        //     async authorize(credentials) {
        //         const validatedFields = LoginFormSchema.safeParse(credentials)
        //         if (validatedFields.success) {
        //             try {
        //                 await connect()
        //                 const { email, password } = validatedFields.data
        //                 const user = await User.findOne({ email })
        //                 if (!user) return null
        //                 let passwordMatch = await bcrypt.compare(password, user.password)
        //                 if (!passwordMatch) return null
        //                 return user
        //             } catch (error) {
        //                 console.log("error", error)
        //             }
        //         }
        //         return null
        //     }
        // })
    ],
    pages: {
        signIn: '/login',
    }
} satisfies NextAuthConfig