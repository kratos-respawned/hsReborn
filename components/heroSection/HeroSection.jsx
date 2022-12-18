import Image from "next/image";
import hs from "../heroSection/hs.svg";
function HeroSection() {
  return (
    <main className="flex items-center justify-between  mt-10 pb-24">
      <section className="max-w-[575px] space-y-3  ">
        <h2 className="font-clashDisplay font-medium text-white text-7xl">
          Fastest growing student society in North India
        </h2>
        <p className="navlink text-hsWhite leading-7 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <button
          className="rounded-full p-2 px-3 bg-hsBlue text-hsWhite navlink text-sm"
          alt="Learn More"
        >
          Learn More
        </button>
      </section>
      <section className="py-6 flex-grow relative z-10">
        <Image
          src={hs}
          alt="hero section Logo "
          className="mx-auto "
          width={387}
          height={417}
        />
        <div className="bg-hsBlue w-[492px] h-[492px] blur-3xl rounded-full absolute -top-2 translate-x-32 -z-10">
          <div className="bg-hsPink w-[192px] h-[192px] blur-xl rounded-full absolute top-10 translate-x-48" />
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
