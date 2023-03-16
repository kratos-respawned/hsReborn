import Image from "next/image";
import React from "react";
export type Props = {
  id: number;
  title: string;
  image1: string;
  image2: string;
  name1: string;
  name2: string;
  designation1: string;
  designation2: string;
};
function Taumper(props: Props) {
  return (
    <div className="px-7">
      <section className="border-t py-24 relative isolate ">
        {props.id % 2 != 0 && (
          <>
            <figure
              aria-hidden
              className="absolute bg-hsBlue w-32 h-32 md:w-52 md:h-52 
        left-0 -translate-x-1/2 top-0 sm:bottom-1/2 md:-translate-y-1/2
        blur-[100px] -z-10"
            />
            <figure
              aria-hidden
              className="absolute bg-hsPink w-44 h-44 rounded-full 
        right-0 translate-x-1/2 sm:bottom-1/4 sm:translate-y-1/2 bottom-0
              blur-3xl -z-10"
            />
          </>
        )}
        <h2 className="font-clashDisplay  font-medium text-5xl md:text-6xl text-center text-hsWhite mb-24">
          {props.title}
        </h2>
        <div className="grid grid-cols-1 gap-y-7 sm:grid-cols-2  gap-x-5 ">
          <Card
            image={props.image1}
            name={props.name1}
            designation={props.designation1}
          />
          <Card
            image={props.image2}
            name={props.name2}
            designation={props.designation2}
          />
        </div>
      </section>
    </div>
  );
}

export default Taumper;
const Card = (props: any) => {
  return (
    <div className="mx-auto  relative max-w-[400px] max-h-[484px] overflow-clip rounded-b-2xl rounded-t-md hover:shadow-2xl hover:shadow-fuchsia-800 hover:-translate-y-1 duration-300 group">
      <Image
        src={props.image}
        width={420}
        height={509}
        alt={props.name}
        className=" rounded-b-2xl rounded-t-md scale-105 grayscale group-hover:grayscale-0 duration-150"
      />
      <div className="rounded-b-2xl rounded-t-md absolute bottom-0 w-full  bg-gradient-to-t from-hsBlack to-transparent bg-opacity-80  flex flex-col justify-center px-3 md:px-6  py-3 md:py-5">
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
