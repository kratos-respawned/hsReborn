import Image from "next/image";
import { m } from "framer-motion"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider = () => {
    return <m.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
    >
        <Carousel
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={20}
            emulateTouch={true}
            showThumbs={false}
            showIndicators={true}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && <Button onClickHandler={onClickHandler} label={label} />
            }
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && <Button onClickHandler={onClickHandler} label={label} />
            }
        >
            <Card title="HS DAY" description="HS Day is an annual event that celebrates the establishment of the Hackoverflow Society, the most prominent student society at Chandigarh University. The day includes competitive events that allow students from all departments to showcase their talents and learn about the society's accomplishments. It is held to celebrate the achievements of the society and its members. " />
            <Card title="Hack-the-Fest" description="A four-day full-fledged fest in conjunction with the fourth edition of Hackoverflow 4.0. With the vision to promote entrepreneurship and technology on a large scale, as well as provide a platform for students from all fields and interests, team Hackoverflow organized one of the largest techno-entrepreneurial fest of the year.
" />
            {/* <Card title="Google Hashcode '22" dateString="June 20, 2021" /> */}
            {/* <Card title="Google Hashcode '24" dateString="June 20, 2021" /> */}
            {/* <Card title="Google Hashcode '25" dateString="June 20, 2021" /> */}
        </Carousel>
    </m.div>
};
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
            className={` ${isNextArrow ? " right-2 " : " left-2 "
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
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-white stroke-hsPink dark:text-gray-800 sm:h-6 sm:w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {isNextArrow ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        ></path>
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
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
    dateString?: string;
    url?: string;
}) {
    if (description === undefined) {
        description =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida tempus faucibus eget aliquet gravida curabitur blandit vitae cursus. Ut odio adipiscing vestibulum nec, ridiculus adipiscing pellentesque ridiculus.";
    }
    return (
        <div className="  mb-9 grid grid-flow-row md:grid-flow-col md:grid-cols-2  gap-2 py-10 place-items-center px-9 md:px-4 ">
            <Image
                src="/events/coming_soon.jpg"
                height="291"
                width="513"
                alt="hashcode"
            />

            <div className="lg:mr-auto mx-0 md:mx-10  ">
                <div className="text-white  text-4xl sm:text-5xl  font-clashDisplay font-medium text-left  md:text-left">
                    {/* {title.split(" ")[0] + " "}
                    <br className="" />
                    {title.split(" ")[1] + " "}
                    {title.split(" ")[2]} */}
                    {title}
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
export default Slider;