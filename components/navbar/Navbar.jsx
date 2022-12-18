import Image from "next/image";
import hsLogo from "../navbar/navLogo.svg";
import cu from "../navbar/cu.svg";
import qs from "../navbar/qs.svg";
import Link from "next/link";
function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between py-7">
        <div className="flex space-x-4 items-center ">
          <Image src={hsLogo} width={51} height={53} alt="hs logo" />
          <Image src={cu} width={95} height={34} alt="cu logo" />
          <Image src={qs} width={93} height={30} alt="qs logo" />
        </div>
        <ul className="flex space-x-4 text-[#e0e0e0]">
          <li>
            <Link href="/" className="navlink text-sm">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="navlink text-sm">
              Events
            </Link>
          </li>
          <li>
            <Link href="/" className="navlink text-sm">
              Initiatives
            </Link>
          </li>
          <li>
            <Link href="/" className="navlink text-sm">
              Team
            </Link>
          </li>
          <li>
            <Link href="/" className="navlink text-sm">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/" className="navlink text-sm">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
