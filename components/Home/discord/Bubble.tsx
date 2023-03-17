import { link } from "fs";
import Image from "next/image";
import React from "react";
type Prop = {
  link: string;
};
function Bubble({ link }: Prop) {
  return (
    <Image
      src={link}
      alt="discord"
      width={200}
      height={200}
      className="rounded-full md:w-full md:h-full sm:w-10 sm:h-10 w-8 h-8 "
    />
  );
}

export default Bubble;
