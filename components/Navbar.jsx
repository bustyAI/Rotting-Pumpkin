'use client'
import React from 'react'
import { useState } from 'react'
import { CiMenuBurger, CiMenuFries, CiSearch } from 'react-icons/ci'
import { BsCart4 } from 'react-icons/bs'

const Navbar = () => {
    const [menuHover, setMenuHover] = useState(false)

    return (
        <header className='absolute w-full h-40 bg-gray-300 border-black border-b-2'>
            <nav className='flex flex-row justify-between items-center my-12 mx-8 '>
                <div className='flex space-x-6'>
                    {menuHover ? <CiMenuFries onMouseLeave={() => { setMenuHover(!menuHover) }} className='h-14 w-14 font-bold' /> : <CiMenuBurger onMouseEnter={() => { setMenuHover(!menuHover) }} className='h-12 w-12 font-bold' />}
                    <p className='my-auto text-4xl font-bold'>Rotting Pumpkin</p>
                </div>
                <div className='flex space-x-6'>
                    <CiSearch className='h-12 w-12' />
                    <BsCart4 className='h-12 w-12' />
                </div>


            </nav>
        </header>
    )
}

export default Navbar