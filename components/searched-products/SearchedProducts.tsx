import { SearchPresentation } from '@/interfaces/presentation/Presentation';
import PresentationTitle from './PresentationTitle';
import ProductCard from './ProductCard';

const SearchedProducts = (searchPresentation: SearchPresentation) => {
  return (
    <div>
      <PresentationTitle title={searchPresentation.name} />
      <div className="flex overflow-x-auto p-2 m-2 md:justify-evenly justify-start gap-2">
        {searchPresentation.products?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default SearchedProducts;