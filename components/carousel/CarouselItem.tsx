import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
interface Props {
  url: string;
  title: string;
  image: StaticImageData;
}
const boxShadowStyle = '0px 4px 4px 0px rgba(0, 0, 0, 0.25)';
const CarouselItem = ({ url, title, image }: Props) => {
  return (
    <Link href={`/${url}`} className=" flex flex-col items-center h-28 mx-4">
      <div
        className=" w-[60px] h-[60px] rounded-full flex items-center justify-center p-3 "
        style={{ boxShadow: boxShadowStyle }}
      >
        <Image src={image} alt={title} />
      </div>

      <p className="text-xs text-center my-2 font-semibold lg:text-md xl:text-lg">
        {title}
      </p>
    </Link>
  );
};

export default CarouselItem;