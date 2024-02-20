'use client';
import { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { fetchToken } from '@/lib/fetch/fetchToken';
import Carousel from '@/components/carousel/Carousel';
import NavBar from '@/components/NavBar';
import SectionButton from '@/components/section-button/SectionButton';
import blueBackground from '@/public/images/assets/section-buttons/blue-background.png';
import hand from '@/public/images/assets/section-buttons/hand.png';
import orangeBackground from '@/public/images/assets/section-buttons/orange-background.png';
import medicinesBag from '@/public/images/assets/section-buttons/medicines-bag.png';
import calendar from '@/public/images/assets/section-buttons/calendar.png';
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
      <NavBar />
      <div>{user?.name}</div>
      <div>{user?.email}</div>
      <Carousel />

      <SectionButton
        title={'Inventario'}
        subTitle={'Revisa, agrega o edita los productos de tu farmacia'}
        image={blueBackground}
        secImage={hand}
        color={'bg-orange'}
      />
      <SectionButton
        title={'Crear Venta'}
        subTitle={'Revisa precios y vende de manera rápida'}
        image={blueBackground}
        secImage={medicinesBag}
        color={'bg-orange'}
      />
      <SectionButton
        title={'Historial de ventas'}
        subTitle={'Verifica la información de las ventas realizadas'}
        image={blueBackground}
        secImage={calendar}
        color={'bg-orange'}
      />
    </div>
  );
};

export default HomePage;
