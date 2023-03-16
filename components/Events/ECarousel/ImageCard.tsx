import Image from "next/image";
import React from "react";
export type MarqueeEvent = {
  image: string;
  title: string;
  description: string;
};
function ImageCard({ image, title, description }: MarqueeEvent) {
  return (
    // <div className="mx-auto  relative max-w-[400px] max-h-[484px] overflow-clip rounded-b-2xl rounded-t-md  group">
    //   <Image
    //     src={image}
    //     width={400}
    //     height={484}
    //     alt={title}
    //     className="rounded-b-2xl rounded-t-md scale-105 group-hover:scale-110 transition-transform"
    //   />
    //   <div className="rounded-2xl rounded-t-md absolute bottom-0 w-full  bg-gradient-to-t from-hsBlack to-transparent bg-opacity-80  flex flex-col justify-center px-6 py-5">
    //     <h3 className="font-clashDisplay font-medium text-2xl text-hsWhite ">
    //       {title}
    //     </h3>
    //     <p className="font-Montserrat font-normal text-base text-hsWhite">
    //       {designation}
    //     </p>
    //   </div>
    // </div>
    <div className=" text-hsWhite group rounded-xl overflow-clip bg-[#302441] font-semibold relative">
      <Image src={image} width={400} height={484} alt="image" className="w-full h-full object-cover " />
      <article className="grid place-items-end absolute bottom-0 w-full h-full group-hover:bg-hsBlack/80 transition-colors bg-hsBlack/0  px-3 pb-5">
        <div className="translate-y-full group-hover:translate-y-0 transition-transform">
          <h3 className="text-3xl my-4 ">{title}</h3>
          <p>{description}</p>
        </div>
      </article>
    </div>
  );
}

export default ImageCard;
