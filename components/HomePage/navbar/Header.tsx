import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import cu from "./cu.svg";
export default function Header() {
  const [navStatus, setNavStatus] = useState(false);
  const router = useRouter();
  return (
    <header>
      <nav className="relative z-40 flex justify-between items-center py-3 text-lg px-6 backdrop-blur-3xl bg-[#14141434]">
        <div>
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                bounce: 0.5,
                mass: 0.4,
                duration: 0.5,
              }}
              className="max-w-[40px] max-h-[40px] lg:max-w-none lg:max-h-full"
            >
              <Image src={cu} width={50} height={50} alt="LOGO" />
            </motion.div>
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            bounce: 0.5,
            mass: 0.4,
            duration: 0.5,
          }}
          className={`flex lg:items-center items-end gap-5 flex-col lg:flex-row lg:static  absolute  pr-10  lg:blur-none lg:bg-[#0000]
          w-1/3  min-w-[200px] pt-28 lg:pt-0  h-screen lg:h-auto lg:w-auto top-0 z-[999]  
          ${
            navStatus
              ? " right-0 bg-[#000000cf] min-h-full backdrop-blur-3xl duration-500  "
              : " -right-full  "
          }`}
        >
          <button
            onClick={() => setNavStatus(!navStatus)}
            className="text-white text-xl absolute top-6 right-7 lg:hidden"
          >
            <AiOutlineClose />
          </button>
          <Link
            className={` relative  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:duration-300 after:bg-white  z-10 text-white font-normal chakra ${
              router.pathname === "/"
                ? " pointer-events-none"
                : " pointer-events-auto hover:after:w-full "
            }`}
            href="/"
          >
            Home
          </Link>

          <Link
            href="/events"
            className={` relative  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:duration-300 after:bg-white  z-10 text-white font-normal chakra ${
              router.pathname === "/events"
                ? " pointer-events-none"
                : " pointer-events-auto hover:after:w-full "
            }`}
          >
            Events
          </Link>

          <Link
            href="/about"
            className={`  relative  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:duration-300 after:bg-white z-10 text-white font-normal chakra ${
              router.pathname === "/about"
                ? " pointer-events-none"
                : " pointer-events-auto hover:after:w-full "
            }`}
          >
            About
          </Link>

          <Link
            href="/initiatives"
            className={`  relative  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:duration-300 after:bg-white z-10 text-white font-normal chakra ${
              router.pathname === "/initiatives"
                ? " pointer-events-none"
                : " pointer-events-auto hover:after:w-full "
            }`}
          >
            Initiatives
          </Link>

          <Link
            href="/team"
            className={`  relative  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:duration-300 after:bg-white z-10 text-white font-normal chakra ${
              router.pathname === "/404"
                ? " pointer-events-none"
                : " pointer-events-auto hover:after:w-full "
            }`}
          >
            Team
          </Link>

          <Link
            href="/contact"
            className={`  relative  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:duration-300 after:bg-white z-10 text-white font-normal chakra ${
              router.pathname === "/contact"
                ? " pointer-events-none"
                : " pointer-events-auto hover:after:w-full "
            }`}
          >
            Contact
          </Link>

          <Link
            href="/404"
            className="  relative  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:duration-300 after:bg-white z-10 text-white chakra border border-solid px-4 border-yellow-800 italic"
          >
            Join Team
          </Link>
        </motion.div>
        <button
          className={`text-lg text-white lg:hidden  ${
            navStatus ? "invisible" : "visible"
          }`}
          onClick={() => setNavStatus(true)}
        >
          <GiHamburgerMenu />
        </button>
      </nav>
    </header>
  );
}
