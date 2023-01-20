import { Carousel as Slider } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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

      <Slider
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={20}
        emulateTouch={true}
        showThumbs={false}
        showIndicators={true}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={false}
        interval={5000}
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && <Button onClickHandler={onClickHandler} label={label} />
        }
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && <Button onClickHandler={onClickHandler} label={label} />
        }
      >
        <Card title="Google Hashcode '21" dateString="June 20, 2021" />
        <Card title="Google Hashcode '22" dateString="June 20, 2021" />
        <Card title="Google Hashcode '23" dateString="June 20, 2021" />
        <Card title="Google Hashcode '24" dateString="June 20, 2021" />
        <Card title="Google Hashcode '25" dateString="June 20, 2021" />
      </Slider>

      {/* <Carousel draggable={false}></Carousel> */}
    </main>
  );
}
export default ECarousel;

const Button = ({
  onClickHandler,
  label,
}: {
  onClickHandler: () => void;
  label: string;
}) => {
  const isNextArrow = label.split(" ")[0] === "next";
  return (
    <button
      className={` ${
        isNextArrow ? " right-2 " : " left-2 "
      } group absolute z-50 top-1/2  -translate-y-1/2 bg-[#241833] rounded-full focus:outline-hsPink`}
      data-testid="carousel-right-control"
      type="button"
      title={label}
      onClick={onClickHandler}
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50  dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60  sm:h-10 sm:w-10">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="0"
          viewBox="0 0 24 24"
          className="h-5 w-5 text-white stroke-hsPink dark:text-gray-800 sm:h-6 sm:w-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isNextArrow ? (
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          ) : (
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          )}
        </svg>
      </span>
    </button>
  );
};

function Card({
  title,
  description,
  dateString,
  url,
}: {
  title: string;
  description?: string;
  dateString: string;
  url?: string;
}) {
  if (description === undefined) {
    description =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida tempus faucibus eget aliquet gravida curabitur blandit vitae cursus. Ut odio adipiscing vestibulum nec, ridiculus adipiscing pellentesque ridiculus.";
  }
  return (
    <div className="  mb-9 grid grid-flow-row md:grid-flow-col md:grid-cols-2  gap-2 py-10 place-items-center px-9 md:px-4 ">
      <Image
        src="/events/hashcode.png"
        height="291"
        width="513"
        alt="hashcode"
      />

      <div className="lg:mr-auto mx-0 md:mx-10  ">
        <div className="text-white  text-4xl sm:text-5xl  font-clashDisplay font-semibold text-left  md:text-left">
          {title.split(" ")[0] + " "}
          <br className="" />
          {title.split(" ")[1] + " "}
          {title.split(" ")[2]}
        </div>
        <div className="text-white/50 text-lg font-clashDisplay font-semibold text-left  md:text-left  my-4">
          {dateString}
        </div>
        <div className=" max-w-lg text-white text-m mx-0     text-left sm:text-justify  font-generalSans font-normal lg:w-3/4">
          {description}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
