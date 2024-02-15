'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import { FaRegUserCircle } from 'react-icons/fa';
import {
  Badge,
  Button,
  Drawer,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import { useStore } from '@/store/zustaban';
import { useState } from 'react';
const NavBar = () => {
  const { user, error, isLoading } = useUser();
  const bears = useStore((state: any) => state.bears);
  const increasePopulation = useStore((state: any) => state.increasePopulation);
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  if (error != null) return <div>{error.message}</div>;

  if (user == null) {
    return (
      <nav className="flex flex-row  m-2 p-2 justify-between gap-2">
        <h1 className="text-4xl font-semibold">
          <Link href="/">DEEP PHARMA</Link>
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
    <nav className="flex flex-row  m-2 p-2 justify-between gap-2  ">
      <div>
        <h2 className="text-lg">
          <Link href="/">Bienvenido</Link>
        </h2>
        <h1 className="text-xl font-semibold">Botica global salud</h1>
      </div>

      <a href="#buttons-with-link">
        <FaRegUserCircle size={60} />
      </a>
      <Drawer
        open={open}
        onClose={closeDrawer}
        className="p-4 bg-amber-900"
        placeholder={''}
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" placeholder={''}>
            Deep Pharma
          </Typography>
          <IconButton
            placeholder={''}
            variant="text"
            color="blue-gray"
            onClick={closeDrawer}
          >
            X
          </IconButton>
        </div>

        <div className="flex flex-col items-start gap-2 h-full w-full">
          <Button placeholder={''} size="sm" variant="outlined">
            Inicio
          </Button>
          <Button placeholder={''} size="sm">
            Inventario
          </Button>
          <Button placeholder={''} size="sm">
            Ventas
          </Button>
          <Button placeholder={''} size="sm">
            Historial de ventas
          </Button>
          <IconButton placeholder={''} color="blue">
            <i className="fas fa-heart" />
          </IconButton>
        </div>
      </Drawer>
    </nav>
  );
};

export default NavBar;
