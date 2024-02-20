import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
interface Props {
  title: string;
  subTitle: string;
  image: StaticImageData;
  secImage: StaticImageData;
  color: string;
}
const SectionButton = ({ title, subTitle, image, secImage, color }: Props) => {
  return (
    <Link
      href={''}
      className={`w-11/12  ${color}  rounded-2xl text-white font-bold flex justify-between items-center h-28 m-auto my-8`}
    >
      <div className="w-7/12 md:w-8/12 lg:w-10/12 h-full flex flex-col justify-center px-5 py-10">
        <p className="sm:text-md md:text-lg lg:text-3xl ">{title}</p>
        <p className="text-xs sm:text-sm md:text-md lg:text-lg font-light">
          {subTitle}
        </p>
      </div>
      <div className="w-5/12 md:w-4/12 lg:w-2/12 h-full relative flex">
        <Image className="z-10 bottom-0 right-0" src={image} alt={title} />

        <Image
          className="z-20 absolute bottom-0 right-0  h-full"
          src={secImage}
          alt={title}
        />
      </div>
    </Link>
  );
};

export default SectionButton;
