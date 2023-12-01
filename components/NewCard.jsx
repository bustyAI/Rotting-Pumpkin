"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const NewCard = ({ title, material, price }) => {
    const [isCardHovered, setIsCardHovered] = useState(false);

    return (
        <div className='flex flex-col relative bg-gray-200 h-[400px] w-[350px]'>
            <div
                onMouseEnter={() => setIsCardHovered(!isCardHovered)}
                onMouseLeave={() => setIsCardHovered(!isCardHovered)}
                className={`flex justify-center items-center bg-gray-300 h-[400px]`}>
                {isCardHovered ? <Image src={'next.svg'} height={300} width={300} /> : <Image src={'vercel.svg'} height={300} width={300} />}

            </div>
            <div className='flex flex-col my-4 space-y-1'>
                <p className='text-2xl font-bold'>{title}</p>
                <p className='text-xl font-light'>{material}</p>
                <p className='text-xl font-light'>{price}</p>
            </div>
        </div>
    )
}

export default NewCard