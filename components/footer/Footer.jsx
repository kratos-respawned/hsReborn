import Image from "next/image";
import Link from "next/link";

function Socials({ heightWidth = 22, className = "", override = false }) {
  let classes = "grid grid-cols-4 gap-1 " + className;
  if (override) {
    classes = className;
  }

  return (
    <>
      <div className={classes}>
        <a href="https://twitter.com/Hackoverflow3">
          <Image
            src="/footer/twitter.svg"
            alt="twitter icon"
            height={heightWidth}
            width={heightWidth}
          />
        </a>

        <a href="https://discord.gg/beWGASaKAt">
          <Image
            src="/footer/discord.svg"
            alt="discord icon"
            height={heightWidth}
            width={heightWidth}
          />
        </a>

        <a href="https://www.instagram.com/hackoverflowsociety/">
          <Image
            src="/footer/instagram.svg"
            alt="instagram icon"
            height={heightWidth}
            width={heightWidth}
          />
        </a>

        <a href="https://www.facebook.com/HACKOVERFLOW3">
          <Image
            src="/footer/facebook.svg"
            alt="facebook icon"
            height={heightWidth}
            width={heightWidth}
          />
        </a>
      </div>
    </>
  );
}

export default function Footer({ className = "" }) {
  const classes = "p-4 bg-hsBlack md:p-6 " + className;

  return (
    <>
      <footer className={classes}>
        <div className="flex  flex-col md:justify-between md:flex-row md:mx-28">
          {/* Logo and other content */}
          <div className="w-64 self-center md:self-auto">
            <div className="flex flex-col md:flex-row items-center mb-20 md:mb-4">
              <div className="mb-5 md:mb-0 md:pr-3">
                <div className="hidden md:block">
                  <Image
                    src="/hsLogo.png"
                    width={57}
                    height={59}
                    alt="Hackoverflow Logo"
                  />
                </div>

                <div className="md:hidden">
                  <Image
                    src="/hsLogo.png"
                    width={94}
                    height={97}
                    alt="Hackoverflow Logo"
                  />
                </div>
              </div>

              <div className="text-white text-center mb-7 md:mb-0 md:text-left  whitespace-nowrap">
                {/* Footer title */}
                <span className="self-center text-xl font-bold">
                  <span className="hidden md:inline">Hackoverflow</span>
                  <span className="md:hidden">For Students By Students</span>
                </span>

                <br />

                {/* sub-title */}
                <span className="font-normal">
                  <span className="hidden md:inline">Society</span>
                  <span className="md:hidden">Be Part of The Change</span>
                </span>
              </div>

              <Socials heightWidth={29} className="md:hidden gap-6" />
            </div>

            <p className="hidden md:block text-slate-100">
              Hackoverflow Society is a student-driven technical society
              recognized by Chandigarh University. It was officially inducted as
              a society by the Hon&apos;ble Chancellor of Chandigarh University
              in 2020.
            </p>
          </div>

          {/* Grid for navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 text-white">
            {/* Events column */}
            <div className="justify-self-center">
              <h3 className="mb-6 md:mt-0 text-base poppinsRegular font-semibold">
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
            <div className="justify-self-center">
              <h3 className="mb-6 text-base poppinsRegular font-semibold">
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

                <li className="mb-4 md:hidden">
                  <a
                    href="https://cuchd.in"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Chandigarh University, <br />
                    Gharuan, Mohali, <br />
                    Punjab, India
                  </a>
                </li>
              </ul>
            </div>

            {/* Mini-Contact form */}
            <div className="hidden md:flex flex-col items-end justify-between">
              <div className="hidden md:grid grid-cols-2 text-white font-bold uppercase">
                <div>Follow Us</div>

                <Socials />
              </div>
            </div>
          </div>
        </div>

        <hr className="mb-3 mt-8 md:mt-16 border-gray-700 md:mx-auto" />

        <div className="flex flex-col items-center justify-between text-sm text-gray-400">
          <span className="md:text-center">
            © 2022,{" "}
            <Link
              href="/"
              rel="noreferrer"
              className="hover:underline text-white font-bold"
            >
              HackoverFlow Society
            </Link>
            , All Rights Reserved
          </span>
          <h4 className="hidden md:block">
            <a href="https://cuchd.in" target="_blank" rel="noreferrer">
              Chandigarh University, Gharuan, Mohali, Punjab, India
            </a>
          </h4>
        </div>
      </footer>
    </>
  );
}

/*
<div className="flex flex-col items-end">
                <h3 className="mb-6 text-3xl flex-1 cdisplaySemibold">Reach Us</h3>

                <form className="flex flex-col items-end mb-6 md:mb-0">
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
