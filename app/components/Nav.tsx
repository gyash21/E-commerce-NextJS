'use client'

import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import Cart from './Cart'
import { useCartStore } from '@/store'
import { AiFillShopping } from "react-icons/ai"



export default function Nav({user} : Session) {

    const cartStore = useCartStore()
    return(
        <nav className='flex justify-between items-center py-12'>
            <Link href={"/"}>

            <h1 className='font-bold text-2xl text-cyan-700'>Next-Ecom</h1>
            </Link>

            <ul className='flex items-center gap-12'>
            {/* Toggle the cart */}
                <li onClick={() => cartStore.toggleCart()} className='flex items-center text-3xl relative cursor-pointer '>
                <AiFillShopping/>
                <span className='bg-teal-700 text-white text-sm font-bold w-5 h-5 rounded-full absolute left-4 bottom-4 flex items-center justify-center'>
                    {cartStore.cart.length}
                </span>
                </li>

                      {/* Checking if the user is Signed In */}
                {!user && (
                    <li className='bg-teal-600 text-white py-2 px-4 rounded-md'>
                    <button onClick={() => signIn()}>Sign </button>
                    </li>
                )}

                {user && (
                    <div>

                    <li>
                        <Image src={user?.image as string} alt={user.name as string} width={36} height={36}
                        className='rounded-full'
                        />
                    </li>

                    <li>Dashboard</li>
                        </div>
                )}
            </ul>
            {cartStore.isOpen && <Cart/>}
        </nav>
    )
}
