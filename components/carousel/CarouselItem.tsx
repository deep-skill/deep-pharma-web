import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
interface Props {
  url: string;
  title: string;
  image: StaticImageData;
}
const CarouselItem = ({ url, title, image }: Props) => {
  return (
    <Link
      href={`/${url}`}
      className=" flex flex-col items-center  mx-4 bg-blue-500 px-4"
    >
      <div className=" shadow-shadow_carousel bg-yellow-400 w-[64px] h-16 rounded-full flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={45}
          height={45}
          className="bg-yellow-500 rounded-full"
        />
      </div>

      <p className="text-xs text-center my-2">{title}</p>
    </Link>
  );
};

export default CarouselItem;
