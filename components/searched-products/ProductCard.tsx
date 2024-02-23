import Link from 'next/link';
import { IoMdAddCircleOutline } from 'react-icons/io';

interface Props {
  id: number;
  name: string;
  description: string;
  brand: {
    id: number;
    name: string;
  };
  category: {
    id: number;
    name: string;
  };
  drug: {
    id: number;
    name: string;
    therapeutic_function: string;
    concentration: string;
  };
  lots: [
    {
      id: number;
      updated_stock: number;
    },
  ];
  suggested_price: {
    id: number;
    price: number;
  };
}

function totalStock(lots: { id: number; updated_stock: number }[]): number {
  if (lots.length === 0) {
    return 0;
  }
  const currentLot = lots[0];
  const remainingStock = lots.slice(1);
  return currentLot.updated_stock + totalStock(remainingStock);
}

const ProductCard = ({ name, brand, drug, suggested_price, lots }: Props) => {
  return (
    <div className="flex flex-col w-46 rounded-lg shadow-lg p-2 content-center">
      <h3 className="text-lg font-bold text-product text-grey_title">{name}</h3>
      <p className="text-product text-sm text-grey_title">
        S/ {suggested_price.price}
      </p>
      <div className="flex gap-2 justify-between items-center">
        <p className="text-product text-xs text-gray">{brand.name}</p>
        <p className="text-product text-xs text-gray">{drug.concentration}</p>
      </div>
      <p className="text-product text-sm text-grey_title">
        {totalStock(lots)} {totalStock(lots) === 1 ? 'unidad' : 'unidades'} en
        stock
      </p>
      <div className="flex gap-2 justify-between items-center">
        <Link
          className="text-white text-xs bg-orange p-1 rounded-md"
          href={'/'}
        >
          Ver detalles
        </Link>
        <IoMdAddCircleOutline className="text-blue text-3xl" />
      </div>
    </div>
  );
};

export default ProductCard;