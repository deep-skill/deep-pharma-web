'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import { FaRegUserCircle } from 'react-icons/fa';
import dLogo from '../assets/image/d.png';
import deepPharmaImg from '../assets/image/deep_pharma_white.png';

import {
  Badge,
  Button,
  Drawer,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import { useStore } from '@/store/zustaban';
import { useState } from 'react';
import Image from 'next/image';
import { IoHomeOutline } from 'react-icons/io5';
import { FiPackage } from 'react-icons/fi';
import { MdOutlineUpdate, MdPointOfSale } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import { IoIosClose } from 'react-icons/io';
const NavBar = () => {
  const { user, error, isLoading } = useUser();
  const bears = useStore((state: any) => state.bears);
  const increasePopulation = useStore((state: any) => state.increasePopulation);
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const pathName = usePathname();
  if (error != null) return <div>{error.message}</div>;
  if (user == null) {
    return (
      <nav className="flex flex-row  m-2 p-2 justify-between gap-2">
        <h1 className="text-4xl font-semibold">
          <Link href="/">Deep Pharma</Link>
        </h1>

        <Button variant="filled" color="black" placeholder={undefined}>
          <Link href="/api/auth/login" className="text-purple">
            Inicio de sesión
          </Link>
        </Button>
      </nav>
    );
  }

  return (
    <nav className="flex flex-row  m-2 p-2 justify-between gap-2 text-white ">
      <div>
        <h2 className="text-lg text-black">
          <Link href="/">Bienvenido</Link>
        </h2>
        <h1 className="text-xl font-semibold text-black">
          Botica global salud
        </h1>
      </div>

      <FaRegUserCircle size={60} onClick={openDrawer} color="#FE4502" />

      <Drawer
        open={open}
        onClose={closeDrawer}
        className="p-4 bg-orange"
        placeholder={''}
      >
        <div className="mb-6 flex items-center justify-between">
          <Image src={dLogo} alt="logo" />
          <Image src={deepPharmaImg} alt="logo" />

          <IoIosClose size={40} />
        </div>

        <div className="flex flex-col items-start gap-2 h-full w-full">
          <div
            className={`flex items-center p-3 w-full ${
              pathName === '/home'
                ? 'bg-white text-blue-gray-900 rounded-full font-semibold'
                : ''
            }`}
          >
            <IoHomeOutline className="mr-2" />
            <Link href={'/home'}>Inicio </Link>
          </div>

          <div
            className={`flex items-center p-3 w-full ${
              pathName === '/inventory'
                ? 'bg-white text-blue-gray-900 rounded-full'
                : ''
            }`}
          >
            <FiPackage className="mr-2" />
            <Link href={'/inventory'}>Inventario</Link>
          </div>
          <div
            className={`flex items-center p-3 w-full ${
              pathName === '/sales'
                ? 'bg-white text-blue-gray-900 rounded-full font-semibold'
                : ''
            }`}
          >
            <MdPointOfSale className="mr-2" />
            <Link href={'/sales'}>Ventas</Link>
          </div>
          <div
            className={`flex items-center p-3 w-full ${
              pathName === '/sales-history'
                ? 'bg-white text-blue-gray-900 rounded-full font-semibold'
                : ''
            }`}
          >
            <MdOutlineUpdate className="mr-2" />
            <Link href={'/sales-history'}>Historial de ventas</Link>
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

export default NavBar;
