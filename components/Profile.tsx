import Link from 'next/link'
import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'

export const Profile = () => {
    return (

        <div className='flex flex-row justify-between'>
            <div className='p-4'>
                <h2 className=" text-xl text-gray_title font-semibold sm:text-orange">
                    <Link href="/">Bienvenido</Link>
                </h2>
                <h1 className="text-3xl font-bold text-gray_title sm:text-orange">
                    Botica Global Salud
                </h1>
            </div>
            <div className='flex justify-center items-center p-4'>
                <FaRegUserCircle size={45} color="#FC6A05" />
            </div>
        </div>
    )
}

export default Profile;
