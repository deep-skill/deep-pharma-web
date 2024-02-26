'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, Drawer } from '@material-tailwind/react';
import { useState } from 'react';
import { FiPackage } from 'react-icons/fi';
import { MdOutlineUpdate, MdPointOfSale } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import { IoIosClose, IoMdCloseCircleOutline } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';
import deepPharmaImg from '../assets/image/deep_pharma_white.png';
import { RxAvatar } from 'react-icons/rx';
const NavBar = ({ userPicture }: { userPicture?: string | null | undefined }) => {

  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const pathName = usePathname();

  return (
    <nav className="flex flex-row  m-2 p-2 justify-between gap-2 text-white ">
      {userPicture ? <Avatar
        onClick={openDrawer}
        variant="circular"
        alt="Perfil usuario"
        src={userPicture ? userPicture : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
        size="lg" placeholder={undefined} />: <RxAvatar />}
      <Drawer
        size={500}
        placement="right"
        open={open}
        onClose={closeDrawer}
        className="p-4 bg-orange"
        placeholder={''}
      >
        <div className="mb-6 flex items-center justify-between">
          <Image src={deepPharmaImg} alt="logo" width={150} />
          <IoIosClose
            size={40}
            onClick={closeDrawer}
            className="cursor-pointer"
          />
        </div>

        <div className="flex flex-col items-start gap-2 h-full w-full">
          <div
            className={`flex items-center p-3 w-full ${pathName === '/home'
              ? 'bg-white text-blue-gray-900 rounded-full font-semibold'
              : ''
              }`}
          >
            <IoHomeOutline className="mr-2" size={25} />
            <Link href={'/home'} onClick={closeDrawer}>
              Inicio{' '}
            </Link>
          </div>

          <div
            className={`flex items-center p-3 w-full ${pathName === '/inventory'
              ? 'bg-white text-blue-gray-900 rounded-full'
              : ''
              }`}
          >
            <FiPackage className="mr-2" size={25} />
            <Link href={'/home/inventory'} onClick={closeDrawer}>
              Inventario
            </Link>
          </div>
          <div
            className={`flex items-center p-3 w-full ${pathName === '/sales'
              ? 'bg-white text-blue-gray-900 rounded-full font-semibold'
              : ''
              }`}
          >
            <MdPointOfSale className="mr-2" size={25} />
            <Link href={'/home/sale'} onClick={closeDrawer}>
              Ventas
            </Link>
          </div>
          <div
            className={`flex items-center p-3 w-full ${pathName === '/sales-history'
              ? 'bg-white text-blue-gray-900 rounded-full font-semibold'
              : ''
              }`}
          >
            <MdOutlineUpdate className="mr-2" size={25} />
            <Link href={'/home/sale-history'} onClick={closeDrawer}>
              Historial de ventas
            </Link>
          </div>
          <div
            className={`flex items-center p-3 w-full ${pathName === '/user-profile'
              ? 'bg-white text-blue-gray-900 rounded-full font-semibold'
              : ''
              }`}
          >
            <FaRegUserCircle className="mr-2" size={25} />
            <Link href={'/user-profile'} onClick={closeDrawer}>
              Perfil del usuario
            </Link>
          </div>
          <div
            className={`flex items-center p-3 w-full ${pathName === '/user-profile'
              ? 'bg-white text-blue-gray-900 rounded-full font-semibold'
              : ''
              }`}
          >
            <IoMdCloseCircleOutline className="mr-2" size={25} />
            <Link href={'/api/auth/logout'} onClick={closeDrawer}>
              Cerrar Sesion
            </Link>
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

export default NavBar;
