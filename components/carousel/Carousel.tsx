import React from 'react';
import CarouselItem from './CarouselItem';
import medicine from '../../assets/image/carousel/medicines.png';
import medicalSupplies from '../../assets/image/carousel/medical_supplies.png';
import vitaminsSuplements from '../../assets/image/carousel/vitamins_suplements.png';
import others from '../../assets/image/carousel/others.png';
import personalCare from '../../assets/image/carousel/personal_care.png';
import sexualHealth from '../../assets/image/carousel/sexual_health.png';

const Carousel = () => {
  return (
    <div className="flex overflow-x-auto h-28 my-4">
      <CarouselItem url={'medicines'} title={'Medicamentos'} image={medicine} />
      <CarouselItem
        url={'medical-supplies'}
        title={'Insumos medicos'}
        image={medicalSupplies}
      />
      <CarouselItem
        url={'vitamins-suplements'}
        title={'Vitaminas y suplementos'}
        image={vitaminsSuplements}
      />
      <CarouselItem
        url={'personal-care'}
        title={'Cuidado personal'}
        image={personalCare}
      />
      <CarouselItem
        url={'sexual-health'}
        title={'Bienestar sexual'}
        image={sexualHealth}
      />
      <CarouselItem url={'others'} title={'Otros'} image={others} />
    </div>
  );
};

export default Carousel;
