'use client'
import React from 'react'
import { useState } from 'react'
import { CiMenuBurger, CiMenuFries, CiSearch } from 'react-icons/ci'
import { TbShoppingBag } from 'react-icons/tb'

const Navbar = () => {
    const [menuHover, setMenuHover] = useState(false)

    return (
        <div className='flex justify-center'>
            <header className='absolute w-4/5 h-40 bg-gray-300 border-black border-b-2'>
                <nav className='flex flex-row justify-between items-center my-12 mx-8 '>
                    <div className='flex space-x-6'>
                        {menuHover ? <CiMenuFries onMouseLeave={() => { setMenuHover(!menuHover) }} className='h-14 w-14 font-bold' /> : <CiMenuBurger onMouseEnter={() => { setMenuHover(!menuHover) }} className='h-12 w-12 font-bold' />}
                        <p className='my-auto text-4xl font-bold'>Rotting Pumpkin</p>
                    </div>
                    <div className='flex space-x-6'>
                        <CiSearch className='h-12 w-12' />
                        <TbShoppingBag className='h-12 w-12' />
                    </div>


                </nav>
            </header>
        </div>
    )
}

export default Navbar