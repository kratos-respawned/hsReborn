import Image from "next/image";
import Link from "next/link";
import kitty from "./lub.gif";
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
function Socials({ heightWidth = 22, className = "", override = false }) {
  let classes = "grid grid-cols-4 gap-1 " + className;
  if (override) {
    classes = className;
  }

  return (
    <>
      <div className={classes}>
        <a href="https://twitter.com/Hackoverflow3" title="twitter">
          <AiFillTwitterSquare
            size={heightWidth}
            className="hover:text-hsPink text-white"
          />
        </a>

        <a href="https://discord.gg/beWGASaKAt" title="discord server link">
          <FaDiscord
            size={heightWidth}
            className="hover:text-hsPink text-white"
          />
        </a>

        <a
          href="https://www.instagram.com/hackoverflowsociety/"
          title="instagram"
        >
          <AiFillInstagram
            size={heightWidth}
            className="hover:text-hsPink text-white"
          />
        </a>

        <a href="https://www.facebook.com/HACKOVERFLOW3" title="facebook">
          <AiFillFacebook
            className="hover:text-hsPink text-white"
            size={heightWidth}
          />
        </a>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="p-4 bg-hsBlack lg:p-6  relative z-10 overflow-clip">
        <figure
          aria-hidden
          className="bg-hsBlue blur-3xl  w-3/4 h-96 absolute bottom-full -translate-y-7 left-1/2 -translate-x-1/2 -z-10 "
        >
          <figure className="bg-hsPink blur-lg bg-blend-normal w-1/2 h-36 mx-auto absolute left-1/2 -translate-x-1/2 bottom-0 " />
        </figure>
        <div className="flex  flex-col lg:justify-between lg:flex-row  gap-x-3">
          {/* Logo and other content */}
          <div className="basis-1/3 self-center lg:self-auto">
            <div className="flex flex-col lg:flex-row items-center mb-20 lg:mb-4">
              <div className="mb-5 lg:mb-0 lg:pr-3">
                <div className="hidden lg:block">
                  <Image
                    src="/hsLogo.png"
                    width={64}
                    height={69}
                    alt="Hackoverflow Logo"
                  />
                </div>

                <div className="lg:hidden">
                  <Image
                    src="/hsLogo.png"
                    width={94}
                    height={97}
                    alt="Hackoverflow Logo"
                  />
                </div>
              </div>

              <div className="text-white text-center mb-7 lg:mb-0 lg:text-left  whitespace-nowrap">
                {/* Footer title */}
                <span className="self-center text-2xl font-semibold font-clashDisplay">
                  <span className="hidden lg:inline tracking-wider">
                    Hackoverflow
                  </span>
                  <span className="lg:hidden">For Students By Students</span>
                </span>

                <br />

                {/* sub-title */}
                <span className="font-clashDisplay font-normal">
                  <span className="hidden lg:inline text-2xl">Society</span>
                  <span className="lg:hidden">Be Part of The Change</span>
                </span>
              </div>

              <Socials heightWidth={29} className="lg:hidden gap-6" />
            </div>

            <p className="hidden lg:block text-slate-100 font-Montserrat font-light text-base  leading-5">
              Hackoverflow Society is a student-driven technical society
              recognized by Chandigarh University. It was officially inducted as
              a society by the Hon&apos;ble Chancellor of Chandigarh University
              in 2020.
            </p>
          </div>

          {/* Grid for navigation */}
          <div className="gap-x-4 grid grid-cols-2 lg:grid-cols-3 gap-1 text-white">
            {/* Events column */}
            <div className="justify-self-center font-Montserrat">
              <h3 className="mb-6 lg:mt-0 text-base font-clashDisplay tracking-wider font-semibold">
                Events
              </h3>
              <ul>
                <li className="mb-4 hover:underline">
                  <Link href="/events/upcoming-events">Upcoming Events</Link>
                </li>

                <li className="mb-4 hover:underline">
                  <Link href="/events/all-events">All Events</Link>
                </li>

                <li className="mb-4 hover:underline">
                  <Link href="/hackoverflow-2020">Hackoverflow 3.0</Link>
                </li>

                <li className="mb-4 hover:underline">
                  <Link href="/google-hashcode-2021">Google HashCode 2021</Link>
                </li>

                <li className="mb-4 hover:underline">
                  <Link href="/freshers-carnival">Fresher's Carnival</Link>
                </li>

                <li className="mb-4 hover:underline">
                  <Link href="/hack-1-on-1">Hack 1-on-1</Link>
                </li>

                <li className="mb-4 hover:underline">
                  <Link href="/hacktober-fest">Hacktober Fest</Link>
                </li>
              </ul>
            </div>

            {/* Contact info column */}
            <div className="justify-self-center font-Montserrat">
              <h3 className="mb-6 text-base font-clashDisplay tracking-wider font-semibold">
                Contact Us
              </h3>
              <ul>
                <li className="mb-4 hover:underline">
                  <a href="mailto:hackoverflow@cumail.in">
                    hackoverflow@cumail.in
                  </a>
                </li>

                <li className="mb-4 hover:underline">
                  <a href="tel:+91 7357610734">+91 7357610734</a>
                </li>

                <li className="mb-4 lg:hidden">
                  <a
                    href="https://cuchd.in"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Chandigarh University , <br />
                    Gharuan, Mohali, <br />
                    Punjab, India
                  </a>
                </li>
              </ul>
            </div>

            {/* Mini-Contact form */}
            <div className="hidden lg:flex flex-col items-end justify-between">
              <div className="hidden lg:grid grid-cols-2 text-white font-bold uppercase">
                <div>Follow Us</div>

                <Socials />
              </div>
            </div>
          </div>
        </div>

        <hr className="mb-3 mt-8 lg:mt-16 border-gray-700 lg:mx-auto" />

        <div className="flex flex-col items-center justify-between text-sm text-gray-400">
          <span className="lg:text-center space-x-2 font-Montserrat">
            © 2022,
            <Link
              href="/"
              rel="noreferrer"
              className="hover:underline text-white font-bold"
            >
              HackoverFlow Society
            </Link>
            , All Rights Reserved
          </span>
          <h4 className="hidden lg:block font-Montserrat">
            <a href="https://cuchd.in" target="_blank" rel="noreferrer">
              Chandigarh University, Gharuan, Mohali, Punjab, India
            </a>
          </h4>
          <span className="font-Montserrat">
            Made with
            <span className="ml-2 relative group cursor-pointer">
              <a
                href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
                target="_blank"
                rel="noreferrer"
              >
                ❤️
              </a>
              <span className="absolute bottom-full left-0 -translate-x-1/2 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ">
                <Image src={kitty} width={200} height={200} alt="kitty" />
              </span>
            </span>
          </span>
        </div>
      </footer>
    </>
  );
}

/*
<div className="flex flex-col items-end">
                <h3 className="mb-6 text-3xl flex-1 cdisplaySemibold">Reach Us</h3>

                <form className="flex flex-col items-end mb-6 lg:mb-0">
                  <input
                    type="text"
                    name="message"
                    id="htsTextMsg"
                    className="border text-black px-3  rounded-3xl h-11 w-72 mb-3"
                  />
                  <button
                    type="submit"
                    className="border rounded-2xl px-3 py-1"
                  >
                    Send Message
                  </button>
                </form>
              </div>
 */
