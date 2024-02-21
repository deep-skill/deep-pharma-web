'use client';
import { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { fetchToken } from '@/lib/fetch/fetchToken';
import Carousel from '@/components/carousel/Carousel';
import Header from '@/components/Header';
import Profile from '@/components/Profile';

const HomePage = () => {
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Header />
      <Profile/>
      {/* <div>{user?.name}</div>
      <div>{user?.email}</div> */}
      <Carousel />
    </div>
  );
};

export default HomePage;
