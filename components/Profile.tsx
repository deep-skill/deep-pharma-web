'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import { fetchToken } from '@/lib/fetch/fetchToken';
import { useUser } from '@auth0/nextjs-auth0/client';
import NavBar from './NavBar';
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
        <h2 className=" text-xl text-gray_title font-semibold  text-dark_gray sm:text-orange">
          <Link href="/">Bienvenido</Link>
        </h2>
        <h2 className="text-3xl font-bold text-gray_title text-dark_gray sm:text-orange">
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
        <h2 className=" text-xl text-gray_title font-semibold  text-dark_gray sm:text-orange">
          <Link href="/">Bienvenido</Link>
        </h2>
        <h2 className="text-3xl font-bold text-gray_title text-dark_gray sm:text-orange">
          Botica Global Salud
        </h2>
      </div>
      <div>
      
      </div>
      <div className='flex justify-center items-center p-4'>
        <NavBar userPicture={user?.picture}/>
      </div>
    </div>
  )
}

export default Profile;
