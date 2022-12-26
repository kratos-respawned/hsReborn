import Image from "next/image";

function AboutCu() {
  return (
    <section className=" mb-28 space-y-14 sm:space-y-28  border-t z-10 relative ">
      <article className="mt-16 space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 text-hsWhite font-generalSans font-normal">
        <div className="relative ">
          <h2 className="sticky top-4 font-clashDisplay font-medium text-4xl sm:text-6xl">
            About CU
          </h2>
          <figure
            aria-hidden
            className="hidden sm:block w-48 h-48 rounded-full blur-3xl bg-hsBlue absolute bottom-0 -z-10"
          >
            <figure className="w-16 h-16 blur-sm bg-hsPink absolute right-0 " />
          </figure>
        </div>
        <div className="space-y-6 md:space-y-10 relative">
          <p>
            Chandigarh University (CU) is a leading Indian Institution offering
            its students a unique amalgamation of professional and academic
            excellence. The University has been accredited with the prestigious
            A+ grade by the National Assessment and Accreditation Council
            (NAAC). Chandigarh University has become Youngest and the only
            private university in India to bag an A+ grade in the first cycle of
            the accreditation process and has also become the only state private
            university of Punjab to be accredited by NAAC.
          </p>
          <p>
            Also, ranked among Asia’s best and fastest-growing universities, CU
            has coupled the experience of top industry leaders and renowned
            academicians to foster a global approach.
          </p>
          <p>
            A wide spectrum of programs paired with flexibility, experiential
            learning and interdisciplinary orientation emancipate our students
            to explore their interests and pursue dream careers. At CU we are
            grooming students to be socially sensitive through intellectually
            challenging and contemporary diverse culture.
          </p>
          <figure
            aria-hidden
            className="sm:hidden block w-48 h-48 rounded-full blur-3xl bg-hsBlue absolute bottom-0 -z-10"
          >
            <figure className="w-16 h-16 blur-sm bg-hsPink absolute right-0 " />
          </figure>
        </div>
      </article>
      <div className="rounded-3xl overflow-hidden">
        <Image
          src="/about/cu.png"
          className="rounded-3xl hover:scale-105 transition-transform duration-700"
          width={1313}
          height={542}
          alt="cu image"
        />
      </div>
    </section>
  );
}

export default AboutCu;
