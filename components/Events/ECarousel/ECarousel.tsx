import { Carousel } from "flowbite-react";
import Image from "next/image";

interface Props {
  thumbnailUrl?: string;
  title: string;
  description?: string;
  dateString: string;
  url?: string;
}
function ECarousel() {
  return (
    <main className="w-11/12 mx-auto">
      <div className="flex justify-between text-2xl md:text-5xl  font-clashDisplay text-white py-7 border-b">
        <button className="text-left ">
          <h2 className="font-bold tracking-wider">
            Upcoming <br /> Events
          </h2>
        </button>
        <button className="text-left ">
          <h2 className="tracking-wider font-extralight">
            Marquee <br /> Events
          </h2>
        </button>
      </div>

      <Carousel>
        <Card title="Google Hashcode '21" dateString="June 20, 2021" />
        <Card title="Google Hashcode '21" dateString="June 20, 2021" />
        <Card title="Google Hashcode '21" dateString="June 20, 2021" />
        <Card title="Google Hashcode '21" dateString="June 20, 2021" />
        <Card title="Google Hashcode '21" dateString="June 20, 2021" />
      </Carousel>
    </main>
  );
}
export default ECarousel;

function Card({ thumbnailUrl, title, description, dateString, url }: Props) {
  if (description === undefined) {
    description =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida tempus faucibus eget aliquet gravida curabitur blandit vitae cursus. Ut odio adipiscing vestibulum nec, ridiculus adipiscing pellentesque ridiculus.";
  }
  return (
    <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-2  gap-2 py-10 place-items-center px-9 md:px-0">
      {/* <div className="rounded-md lg:ml-auto lg:my-auto md:px-20 px-10"> */}
      <Image
        src="/events/hashcode.png"
        height="291"
        width="513"
        alt="hashcode"
      />
      {/* </div> */}
      <div className="lg:mr-auto mx-0 md:mx-10  ">
        <div className="text-white  text-4xl sm:text-5xl font-clashDisplay font-bold text-left md:text-center lg:text-left">
          {title.split(" ")[0] + " "}
          <br className="" />
          {title.split(" ")[1] + " "}
          {title.split(" ")[2]}
        </div>
        <div className="text-white/50 text-m font-clashDisplay text-left md:text-center lg:text-left  my-4">
          {dateString}
        </div>
        <div className=" max-w-lg text-white text-m mx-0 md:mx-12 lg:mx-0   text-justify  font-generalSans lg:w-3/4">
          {description}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
