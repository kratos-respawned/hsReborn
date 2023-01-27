import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useLoader } from "../../store/store";
function Navbar({ path }: { path: string }) {
  const router = useRouter();
  const loading = useLoader((state) => state.loading);
  const [navVisibility, setNavVisibility] = useState(false);

  useEffect(() => {
    if (path != "/") {
      useLoader.getState().setLoaded();
    }
  }, [path]);
  return (
    <header className={`${loading ? " hidden " : " block "}`}>
      <nav className="relative flex items-center justify-between py-7 px-5 z-50">
        <div className="flex space-x-4 items-center sm:scale-100 scale-90 ">
          <Link href="/">
            <Image src="/hsLogo.png" width={51} height={53} alt="hs logo" />
          </Link>
          <Image src="/navbar/cu.png" width={95} height={34} alt="cu logo" />
          <Image
            src="/navbar/qs.png"
            width={93}
            height={30}
            alt="qs logo"
            className="hidden sm:block"
          />
        </div>
        <ul
          className={`z-50 lg:z-0 tracking-wide absolute bg-[#140f1b92] backdrop-blur-2xl lg:backdrop-blur-none lg:bg-transparent top-0 right-0 ${
            navVisibility ? "-translate-x-0 " : "translate-x-full"
          } transition-transform min-h-[400px] lg:min-h-fit h-screen pt-[20vh] pr-7 text-right lg:text-left lg:pt-0 lg:h-fit  lg:translate-x-0  sm:w-[30vw] w-[50vw] lg:w-fit lg:static flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 text-[#e0e0e0] font-montserrat text-lg lg:text-base`}
        >
          <li>
            <Link
              href="/"
              className={`  navlink ${
                router.pathname === "/"
                  ? " pointer-events-none text-hsPink"
                  : " pointer-events-auto hover:after:w-full "
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/events"
              className={`  navlink ${
                router.pathname === "/events"
                  ? " pointer-events-none text-hsPink"
                  : " pointer-events-auto hover:after:w-full "
              }`}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              href="/initiatives"
              className={`  navlink ${
                router.pathname === "/initiatives"
                  ? " pointer-events-none text-hsPink"
                  : " pointer-events-auto hover:after:w-full "
              }`}
            >
              Initiatives
            </Link>
          </li>
          <li>
            <Link
              href="/team"
              className={`  navlink ${
                router.pathname === "/team"
                  ? " pointer-events-none text-hsPink"
                  : " pointer-events-auto hover:after:w-full "
              }`}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`  navlink ${
                router.pathname === "/about"
                  ? " pointer-events-none text-hsPink"
                  : " pointer-events-auto hover:after:w-full "
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`  navlink ${
                router.pathname === "/contact"
                  ? " pointer-events-none text-hsPink"
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
          <AiOutlineMenuFold
            className={`${
              navVisibility ? " hidden " : " block "
            } text-[#e0e0e0] text-2xl`}
          />
          <AiOutlineMenuUnfold
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
