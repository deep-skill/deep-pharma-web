import Carousel from '@/components/carousel/Carousel';
import SectionButton from '@/components/section-button/SectionButton';
import blueBackground from '@/public/images/assets/section-buttons/blue-background.png';
import hand from '@/public/images/assets/section-buttons/hand.png';
import orangeBackground from '@/public/images/assets/section-buttons/orange-background.png';
import greenBackground from '@/public/images/assets/section-buttons/green-background.png';
import medicinesBag from '@/public/images/assets/section-buttons/medicines-bag.png';
import calendar from '@/public/images/assets/section-buttons/calendar.png';
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import SearchBar from '@/components/search-bar/SearchBar';
import { searchPresentations } from '@/lib/fetch/homeFetch/presentationHomeFetch';
import SearchedProducts from '@/components/searched-products/SearchedProducts';
import { SearchPresentation } from '@/interfaces/presentation/Presentation';


const HomePage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) => {
  const query =
    searchParams?.query !== undefined && searchParams?.query !== null
      ? searchParams.query
      : '';
  const presentations: SearchPresentation[] = await searchPresentations(query);

  return (
    <div>
      <Header />
      {/* <UserProfile/> */}
      <Profile />
      <SearchBar placeholder={'Busca en tu botica'} />
      {presentations.map((presentation) => (
        <div key={presentation.id}>
          <SearchedProducts {...presentation} />
        </div>
      ))}
      {presentations.length === 0 && (
        <div>
          <Carousel />
          <div className="lg:w-8/12 mx-auto">
            <SectionButton
              title={'Inventario'}
              subTitle={'Revisa, agrega o edita los productos de tu farmacia'}
              image={orangeBackground}
              secImage={hand}
              color={'bg-gradient-to-r from-orange via-orange_lite to-orange'}
            />
            <SectionButton
              title={'Crear Venta'}
              subTitle={'Revisa precios y vende de manera rápida'}
              image={blueBackground}
              secImage={medicinesBag}
              color={'bg-gradient-to-r from-blue via-blue_lite to-blue'}
            />
            <SectionButton
              title={'Historial de ventas'}
              subTitle={'Verifica la información de las ventas realizadas'}
              image={greenBackground}
              secImage={calendar}
              color={'bg-gradient-to-r from-green via-green_lite to-green'}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
