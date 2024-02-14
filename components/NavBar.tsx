'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import { Badge, Button } from "@material-tailwind/react";
import { useStore } from '@/store/zustaban';
const NavBar = () => {
  const { user, error, isLoading } = useUser();
  const bears = useStore((state : any )  => state.bears)
  const increasePopulation = useStore((state : any) => state.increasePopulation)

  if (error != null) return <div>{error.message}</div>;
  
  if (user == null) {
    return (
      <nav className="flex flex-row  m-2 p-2 justify-between gap-2">
        
        <h1 className="text-4xl font-semibold">
          <Link href="/">DEEP PHARMA</Link>
        </h1>
        
        <Button variant="filled"  color='black' placeholder={undefined}>
        <Link href="/api/auth/login" className='text-purple' >
          Inicio de sesión
        </Link>
        </Button>
        
      </nav>
    );
  }
  return (
    <nav className="flex flex-row  m-2 p-2 justify-between gap-2">
      <h1 className="text-4xl font-semibold">
          <Link href="/">DEEP PHARMA</Link>
      </h1>
      <div className="flex gap-3">
      <Badge content={bears}>
        <Button 
          variant="outlined" 
          placeholder={undefined}
          onClick={() => increasePopulation()}
          >Notifications</Button>
      </Badge>
      <Button variant="outlined"  placeholder={undefined}>
        <Link href="/home">Home</Link>
      </Button>
      <Button variant="outlined"  placeholder={undefined}>
        <Link href="/product">Product</Link>
      </Button>
      <Link href="/product-form" className='text-black' >
          Crear producto
        </Link>
      <Button variant="filled"  color='orange' placeholder={undefined}>
      <Link
          className="py-2 px-6 rounded-lg bg-sky-700 text-white"
          href="/api/auth/logout"
        >
          Log out
        </Link>
      </Button>
      
      </div>
    </nav>
  );
};

export default NavBar;
