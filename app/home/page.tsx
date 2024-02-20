import Carousel from '@/components/carousel/Carousel';
import GetToken from '@/components/GetToken';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <GetToken/>
      <Carousel />
      <Link href="home/search?query=ibuprofeno" >ir a buscar</Link>
    </div>
  );
};

export default HomePage;
