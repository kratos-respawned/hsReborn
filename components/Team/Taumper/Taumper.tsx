import Image from "next/image";
import React from "react";
export type Props = {
  id: number;
  title: string;
  image1: string;
  image2?: string;
  name1: string;
  name2?: string;
  designation1?: string;
  designation2?: string;
};



const Card = (props: any) => {
  return (
    <div className="mx-auto  relative max-w-[400px] max-h-[484px] overflow-clip rounded-b-2xl rounded-t-md hover:shadow-2xl hover:shadow-fuchsia-800 hover:-translate-y-1 duration-300 group">
      <Image
        src={props.image}
        width={420}
        height={509}
        alt={props.name}
        // className=" rounded-b-2xl rounded-t-md scale-105 grayscale group-hover:grayscale-0 duration-150"
        className=" rounded-b-2xl rounded-t-md scale-105 grayscale  duration-150"
      />
      <div className="rounded-b-2xl rounded-t-md absolute bottom-0 w-full  bg-gradient-to-t from-hsBlack to-hsBlack/50 bg-opacity-80  flex flex-col justify-center px-3 md:px-6  py-3 md:py-5">
        <h3 className="font-clashDisplay font-medium text-lg md:text-2xl text-hsWhite ">
          {props.name}
        </h3>
        <p className="font-Montserrat font-normal text-base text-hsWhite">
          {props.designation}
        </p>
      </div>
    </div>
  );
};
export default Card;