import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import { useState } from "react";
function Navbar() {
  const router = useRouter();
  const [navVisibility, setNavVisibility] = useState(false);
  return (
    <header>
      <nav className="relative flex items-center justify-between py-7 px-5 ">
        <div className="flex space-x-4 items-center sm:scale-100 scale-90 ">
          <Link href="/">
            <Image src="/hsLogo.png" width={51} height={53} alt="hs logo" />
          </Link>
          <Image src="/navbar/cu.png" width={95} height={34} alt="cu logo" />
          <Image src="/navbar/qs.png" width={93} height={30} alt="qs logo" />
        </div>
        <ul
          className={`z-50 lg:z-0 absolute bg-[#0000118a] backdrop-blur-2xl lg:backdrop-blur-none lg:bg-transparent top-0 right-0 ${
            navVisibility ? "-translate-x-0 " : "translate-x-full"
          } transition-transform h-screen pt-[20vh] pr-7 text-right lg:text-left lg:pt-0 lg:h-fit  lg:translate-x-0  sm:w-[30vw] w-[50vw] lg:w-fit lg:static flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 text-[#e0e0e0] font-montserrat text-lg lg:text-base`}
        >
          <li>
            <Link
              href="/"
              className={`  navlink ${
                router.pathname === "/"
                  ? " pointer-events-none"
                  : " pointer-events-auto hover:after:w-full "
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/test"
              className={`  navlink ${
                router.pathname === "Events"
                  ? " pointer-events-none"
                  : " pointer-events-auto hover:after:w-full "
              }`}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`  navlink ${
                router.pathname === "/"
                  ? " pointer-events-none"
                  : " pointer-events-auto hover:after:w-full "
              }`}
            >
              Initiatives
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`  navlink ${
                router.pathname === "/"
                  ? " pointer-events-none"
                  : " pointer-events-auto hover:after:w-full "
              }`}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`  navlink ${
                router.pathname === "/"
                  ? " pointer-events-none"
                  : " pointer-events-auto hover:after:w-full "
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`  navlink ${
                router.pathname === "/"
                  ? " pointer-events-none"
                  : " pointer-events-auto hover:after:w-full "
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <button
          title="menu"
          aria-label="menu"
          className="z-[50] block absolute top-10 right-7  lg:hidden"
          onClick={() => {
            setNavVisibility(!navVisibility);
          }}
        >
          <GiHamburgerMenu
            className={`${
              navVisibility ? " hidden " : " block "
            } text-[#e0e0e0] text-2xl`}
          />
          <AiOutlineClose
            className={`${
              navVisibility ? " block " : " hidden "
            }text-[#e0e0e0] text-2xl`}
          />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
