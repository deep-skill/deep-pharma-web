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
      className={`w-full ${color}  rounded-3xl text-white font-bold flex justify-between items-center`}
    >
      <div className="w-1/2 h-full">
        <p>{title}</p>
        <p>{subTitle}</p>
      </div>
      <div className="w-1/2 h-full relative flex">
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
