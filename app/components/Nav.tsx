'use client'

import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'
import Image from 'next/image'






export default function Nav({user} : Session) {

    return(
        <nav>
            <h1>Styled</h1>

            <ul>
                <li>Products</li>
                {/* Checking if the user is Signed In */}
                {!user && (
                    <li>
                    <button onClick={() => signIn()}>Sign </button>
                    </li>
                )}

                {user && (
                    <li>
                        <Image src={user?.image as string} alt={user.name as string} width={48} height={48}/>
                    </li>
                )}
            </ul>
        </nav>
    )
}
