import { link } from "fs";
import Image from "next/image";
import React from "react";
type Prop = {
  link: string;
};
function Bubble({ link }: Prop) {
  return (
    <Image
      src={`https://avatars.dicebear.com/api/pixel-art-neutral/${link}.svg`}
      alt="discord"
      width={50}
      height={50}
      className="rounded-full md:w-16 md:h-16 sm:w-10 sm:h-10 w-8 h-8 object-scale-down"
    />
  );
}

export default Bubble;
