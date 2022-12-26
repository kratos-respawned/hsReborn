import Image from "next/image";

function AboutHs() {
  return (
    <section className="mb-28 space-y-14 sm:space-y-28 border-t">
      <article className="mt-16 sm:grid sm:grid-cols-2 text-hsWhite font-generalSans font-normal space-y-5 sm:space-y-0">
        <div>
          <h2 className="sticky top-4 font-clashDisplay font-medium text-4xl sm:text-6xl">
            About Us
          </h2>
        </div>
        <div className="space-y-10">
          <p>
            Hackoverflow 1.0 was Chandigarh University’s first-ever short
            hackathon. It was an official event of the university’s tech
            festival and was one of the mega-events. It started in Block 9 and
            around 25 teams participated in it.
          </p>
          <p>
            Ayonika Dey, who is now the co-founder of HTS, was then the core
            member for this event and Karan Bhargav, who is now the founder and
            director of HTS, was then a volunteer. They were people who had
            dreams which were worth more than their sleep. They knew that
            greatness comes before hustle only in a dictionary.
          </p>
        </div>
      </article>
      <section className="image-grid  gap-x-2 gap-y-1 sm:gap-x-5 sm:gap-y-3">
        <div className=" i1 rounded-xl sm:rounded-3xl my-auto overflow-hidden ">
          <Image
            className="rounded-xl sm:rounded-3xl hover:scale-105 transition-transform duration-300"
            src="/about/i1.png"
            alt="test"
            width={431}
            height={520}
          />
        </div>
        <div className=" i2 rounded-xl sm:rounded-3xl overflow-hidden">
          <Image
            className="rounded-xl sm:rounded-3xl hover:scale-105 transition-transform duration-300"
            src="/about/i2.png"
            alt="test"
            width={423}
            height={245}
          />
        </div>
        <div className=" i3 rounded-xl sm:rounded-3xl overflow-hidden">
          <Image
            src="/about/i3.png"
            alt="test"
            width={423}
            height={245}
            className="rounded-xl sm:rounded-3xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className=" i4 rounded-xl sm:rounded-3xl overflow-hidden">
          <Image
            src="/about/i4.png"
            alt="test"
            width={862}
            height={245}
            className="rounded-xl sm:rounded-3xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>
    </section>
  );
}

export default AboutHs;
