import type { Session, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

type UserId = string

declare module 'next-auth/jwt' {
    interface JWT {
        id: UserId
        name: string | null
        email: string
        picture: string
        username: string
    }
}

declare module 'next-auth' {
    interface session {
        id: UserId
        name: string | null
        email: string
        picture: string
        username: string
    }
}