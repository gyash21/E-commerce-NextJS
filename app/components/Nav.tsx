'use client'

import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'






export default function Nav({user} : Session) {

    return(
        <nav>
            <h1>Styled</h1>
        </nav>
    )
}
