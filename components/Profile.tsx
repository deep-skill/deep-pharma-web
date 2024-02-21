'use client'
import { fetchToken } from '@/lib/fetch/fetchToken';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Avatar } from '@material-tailwind/react';
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'

export const Profile = () => {
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    const getToken = async () => {
      if (user) {
        try {
          await fetchToken();
        } catch (err) {
          console.error('Error al obtener el token:', err);
        }
      }
    };
    getToken();
  }, [user]);


  if (isLoading) return (
    <div className='flex flex-row justify-between'>
      <div className='p-4'>
        <h2 className=" text-xl text-gray_title font-semibold sm:text-orange">
          <Link href="/" className='text-dark_gray'>Bienvenido</Link>
        </h2>
        <h2 className="text-3xl font-bold text-gray_title sm:text-orange">
          Botica Global Salud
        </h2>
      </div>
      <div className='flex justify-center items-center p-4'>
        <FaRegUserCircle size={45} color="#FC6A05" />
      </div>
    </div>
  );
  if (error) return <div>{error.message}</div>;
  return (
    <div className='flex flex-row justify-between'>
      <div className='p-4'>
        <h2 className=" text-xl text-gray_title font-semibold sm:text-orange">
          <Link href="/" className='text-dark_gray'>Bienvenido</Link>
        </h2>
        <h2 className="text-3xl font-bold text-gray_title sm:text-orange text-dark_gray">
          Botica Global Salud
        </h2>
      </div>
      <div className='flex justify-center items-center p-4'>
        <Avatar
          variant="circular"
          alt="Remy Sharp"
          src={user?.picture ? user?.picture : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
          size="lg" placeholder={undefined} />
      </div>
    </div>
  )
}

export default Profile;
