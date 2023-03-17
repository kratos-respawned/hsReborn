import Image from "next/image";
import hackerEarth from "./image.png";
function Partners() {
  return (
    <section className="mt-20 md:mt-44 px-5 md:px-20">
      <h2 className="font-clashDisplay text-4xl sm:text-6xl text-hsWhite text-center z-50">
        Sponsors & Collaborations
      </h2>
      <div className="mt-28 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-5 sm:gap-x-10 sm:gap-y-10">

        {Sponsors.map((sponsor, index) => (
          <div key={index} className="rgb py-4 px-5   rounded-2xl bg-[#20182c]">
            <Image
              src={sponsor.image}
              className="mx-auto  invert grayscale object-contain w-40 h-16 "
              width={123}
              height={24}
              alt={sponsor.name}
            />
          </div>))}
      </div>
    </section>
  );
}

export default Partners;
const Sponsors = [
  {
    name: "Coding Ninjas",
    image: "/sponsors/codingNinjas.png"
  },
  {
    name: "HackerEarth",
    image: "/sponsors/hackerearth.png"
  }
  , {
    name: "aspiring minds",
    image: "/sponsors/aspiringMinds.png"
  }
  , {
    name: "Coding Blocks",
    image: "/sponsors/codingBlocks.png"
  },
  {
    name: "IIT Mandi",
    image: "/sponsors/iiy.png"
  }
  , {
    name: "uniball",
    image: "/sponsors/uniball.png"
  }
  , {
    name: "VJ Events",
    image: "/sponsors/vj.png"
  }
  , {
    name: "GeeksforGeeks",
    image: "/sponsors/gfg.png"
  }, {
    name: "VLCC",
    image: "/sponsors/vlcc.jpeg"
  }, {
    name: "Zuno",
    image: "/sponsors/zuno.png"
  }
]