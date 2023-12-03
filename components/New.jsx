import React from 'react'
import { NewCard } from '.'

const New = () => {
    return (
        <div className='flex flex-col w-4/5 bg-gray-400 mx-auto'>
            <p className='text-5xl font-bold my-14'>NEW IN</p>
            <p className='text-3xl font-light'>SHOP ALL NEW BUTTON</p>
            <div className='flex flex-row justify-center bg-gray-200 my-8'>
                <NewCard title={'Bracelet'} material={'seed'} price={'$10'} />
                <NewCard title={'Bracelet'} material={'seed'} price={'$10'} />
                <NewCard title={'Bracelet'} material={'seed'} price={'$10'} />
                <NewCard title={'Bracelet'} material={'seed'} price={'$10'} />
                <NewCard title={'Bracelet'} material={'seed'} price={'$10'} />
            </div>
        </div>
    )
}

export default New