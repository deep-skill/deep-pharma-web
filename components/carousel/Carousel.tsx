import Link from 'next/link';
import React from 'react';
import CarouselItem from './CarouselItem';
import medicine from '../../assets/image/carousel/medicines.png';
const Carousel = () => {
  return (
    <div className="flex overflow-x-auto h-28 bg-red-500  ">
      <CarouselItem url={'medicines'} title={'Medicamentos'} image={medicine} />
      <CarouselItem
        url={'medical-supplies'}
        title={'Insumos medicos'}
        image={medicine}
      />
      <CarouselItem
        url={'vitamins-suplements'}
        title={'Vitaminas y suplementos'}
        image={medicine}
      />
      <CarouselItem
        url={'personal-care'}
        title={'Cuidado personal'}
        image={medicine}
      />
      <CarouselItem
        url={'sexual-health'}
        title={'Bienestar sexual'}
        image={medicine}
      />
      <CarouselItem url={'others'} title={'Otros'} image={medicine} />
    </div>
  );
};

export default Carousel;
