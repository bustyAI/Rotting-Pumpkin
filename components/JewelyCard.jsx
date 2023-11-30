'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const JewelyCard = ({ jewelry }) => {
    const [jewelryHovered, setJewelryHovered] = useState(false)

    return (
        <div onMouseLeave={() => { setJewelryHovered(!jewelryHovered) }}
            onMouseEnter={() => { setJewelryHovered(!jewelryHovered) }}
            className=' flex flex-col relative justify-center items-center bg-gray-200 h-[400px] w-[350px]'>
            <Image src={'next.svg'} height={300} width={300} />
            <div className={`w-full absolute bottom-0 h-1/3 transition-background ease-in-out duration-300 ${jewelryHovered ? 'bg-black' : 'bg-white'}`}>
                <p className={`absolute left-0 bottom-0 text-2xl font-semibold my-8 mx-8 ${jewelryHovered ? 'text-white underline' : 'text-black'}`}>{jewelry}</p>
            </div>

        </div>
    )
}

export default JewelyCard