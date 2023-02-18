import Image from "next/image";
import React from "react";
type Props = {
  image: string;
  name: string;
  designation: string;
};
function ImageCard({ image, name, designation }: Props) {
  return (
    <div className="mx-auto  relative max-w-[400px] max-h-[484px] overflow-clip rounded-b-2xl rounded-t-md  group">
      <Image
        src={image}
        width={400}
        height={484}
        alt={name}
        className="rounded-b-2xl rounded-t-md scale-105 group-hover:scale-110 transition-transform"
      />
      <div className="rounded-2xl rounded-t-md absolute bottom-0 w-full  bg-gradient-to-t from-hsBlack to-transparent bg-opacity-80  flex flex-col justify-center px-6 py-5">
        <h3 className="font-clashDisplay font-medium text-2xl text-hsWhite ">
          {name}
        </h3>
        <p className="font-Montserrat font-normal text-base text-hsWhite">
          {designation}
        </p>
      </div>
    </div>
  );
}

export default ImageCard;
