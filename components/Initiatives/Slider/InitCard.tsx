import Image from "next/image";
type Props = {
  title: string;
  url?: string[];
};
function InitCard({ title }: Props) {
  return (
    <section className=" w-full px-5 space-y-5">
      <div className=" grid grid-cols-4 gap-2">
        <Image
          src="/initiatives/left.png"
          width={221}
          height={283}
          alt="left"
          className="mx-auto col-span-1"
        />
        <Image
          src="/initiatives/center.png"
          width={436}
          height={557}
          alt="left"
          className="col-span-2 mx-auto"
        />
        <Image
          src="/initiatives/left.png"
          width={250}
          height={278}
          alt="left"
          className="place-self-end -translate-y-10"
        />
      </div>
      <h2 className="font-clashDisplay sm:text-3xl lg:text-6xl text-white text-center font-semibold">
        {title.split(" ")[0]}
        <br />
        {title.split(" ")[1]}
      </h2>
    </section>
  );
}

export default InitCard;
