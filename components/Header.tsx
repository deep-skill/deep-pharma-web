import Image from 'next/image';
import logoHome from '@/public/images/assets/home-logo.png';
import logoHomeLg from '@/public/images/assets/home-logo-lg.png';

export const Header = () => {
  return (
    <div className="  flex flex-col ">
      <div className="flex flex-col justify-center items-center bg-orange h-16 w-full rounded-b-2xl drop-shadow-xl sm:bg-white">
        <Image src={logoHome} alt="Logo Home" className=' w-64 h-10 sm:hidden ' />
        <Image src={logoHomeLg} alt="Logo Home Lg" className=' w-64 h-10 hidden sm:block  ' />
      </div>
    </div>
  )
}

export default Header;
