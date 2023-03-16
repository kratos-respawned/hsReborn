import Image from "next/image";
import React from "react";
export type MarqueeEvent = {
  image: string;
  title: string;
  description?: string;
};
function ImageCard({ image, title, description }: MarqueeEvent) {
  return (
    <div className=" text-hsWhite group rounded-xl overflow-clip bg-[#302441] font-semibold relative">
      <Image src={image} width={400} height={484} alt="image" className="w-full h-full object-cover " />
      <article className="grid place-items-end absolute bottom-0 w-full h-full group-hover:bg-hsBlack/90 transition-colors bg-hsBlack/0  px-3 pb-5">
        <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-200">
          <h3 className="text-lg sm:text-3xl my-4 ">{title}</h3>
          <p className="text-sm sm:text-base">{description}</p>
        </div>
      </article>
    </div>
  );
}

export default ImageCard;
