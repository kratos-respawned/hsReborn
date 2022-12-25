import InitCard from "./InitCard";
function Slider() {
  return (
    <main className="mx-auto relative z-20">
      <nav className=" sticky -top-4 mx-5 border-b py-7 bg-hsBlack  ">
        <ul className=" grid grid-cols-4 items-center font-generalSans text-center text-white text-xs sm:text-base lg:text-xl">
          <li>
            <a
              className="active:opacity-100 opacity-50 active:font-bold "
              href="#a"
            >
              Bhartiya Gaming Co.
            </a>
          </li>
          <li>
            <a
              className="active:opacity-100 opacity-50 active:font-bold "
              href=""
            >
              Ladebug Club
            </a>
          </li>
          <li>
            <a
              className="active:opacity-100 opacity-50 active:font-bold "
              href="#"
            >
              Life of Gurus
            </a>
          </li>
          <li>
            <a
              className="active:opacity-100 opacity-50 active:font-bold "
              href="#"
            >
              Membership Townhall
            </a>
          </li>
        </ul>
      </nav>
      <main className="py-14 space-y-52">
        <InitCard title="Membership Townhall" />
        {/* <InitCard title="Membership Townhall" /> */}
        {/* <InitCard title="Membership Townhall" /> */}
      </main>
    </main>
  );
}

export default Slider;
