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
            Hackoverflow Society was founded with a vision to integrate
            passionate and proficient peers all over the nation and provide
            students with the best opportunities to ace their careers. Starting
            in 2018 as Hackoverflow Technical Society, our founding members
            built a foundation for a student-driven community, which came
            together to organize the first-ever national level 36-hour hackathon
            at Chandigarh University.
          </p>
          <p>
            Taking the forward legacy, HTS then evolved into Hackoverflow
            Society, widening its potential to unify interests beyond just tech
            through events like Genesis. Our Society has helped more than 3000+
            students gain hands-on industry-level exposure and get access to
            extensive academic and skill-building resources and events. We aim
            to continue building an inclusive platform for growth and learning
            for students across the country.
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
