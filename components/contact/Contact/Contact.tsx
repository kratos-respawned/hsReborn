import Link from "next/link";
import { useEffect, useRef } from "react";
import { signIn, useSession } from "next-auth/react";
function Contact() {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  // const { data: session } = useSession();
  // useEffect(() => {
  //   if (session) {
  //     if (session.user?.name && session.user?.email) {
  //       setName(session.user.name);
  //       setMail(session.user.email);
  //     }
  //   } else {
  //     //
  //   }
  // }, [session]);
  return (
    <main className="mt-14 mb-28 space-y-10 px-10 relative z-10">
      <figure
        aria-hidden
        className="rounded-full bg-hsBlue blur-3xl absolute -top-10 -left-10   w-52 h-52 -z-10"
      >
        <figure aria-hidden className=" bg-hsPink h-32 w-32 -z-10 ">
          <figure aria-hidden className=" bg-red-500 h-7 w-7 -z-10" />
        </figure>
      </figure>

      <h1 className="font-clashDisplay font-medium text-5xl sm:text-7xl text-white">
        Contact Us
      </h1>
      <section className="flex justify-between gap-7">
        {/* {!session ? (
          <div className="md:px-7  flex flex-col items-baseline justify-center gap-y-12">
            <h2 className="max-w-sm font-generalSans font-medium text-2xl text-hsWhite">
              You must be logged in to send message
            </h2>
            <button
              onClick={() => {
                signIn("google", {
                  callbackUrl: process.env.NEXTAUTH_URL
                    ? process.env.NEXTAUTH_URL
                    : "http://localhost:3000/contact",
                });
              }}
              className=" border border-white hover:border-hsPink duration-300 ease-out hover:text-hsBlack hover:bg-hsPink   font-generalSans text-hsWhite rounded-3xl px-10 py-2"
            >
              Sign In
            </button>
          </div>
        ) : ( */}
        <form
          className="flex flex-col gap-9 w-11/12 md:w-[500px] mt-5  "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            ref={name}
            alt="enter name"
            name="name"
            type="text"
            placeholder="Enter your Name"
            className="bg-transparent tracking-wider border-b  px-3 pb-2 font-generalSans text-lg  text-hsWhite border-b-white focus:outline-none focus:border-b-white"
            required
            readOnly
          />

          <input
            ref={email}
            alt="email field"
            name="email"
            type="email"
            placeholder="Enter your Email"
            className="bg-transparent tracking-wider border-b  px-3 pb-2 border-b-white text-lg  font-generalSans text-hsWhite focus:outline-none focus:border-b-white"
            required
            readOnly
          />

          <textarea
            ref={messageRef}
            name="message"
            placeholder="Message"
            className="bg-transparent tracking-wider border-b  px-3 pb-2 border-b-white text-lg  font-generalSans text-hsWhite  focus:outline-none focus:border-b-white"
            required
            autoComplete="false"
            rows={3}
          />

          <button
            type="submit"
            className="self-start border border-white hover:border-hsPink duration-300 ease-out hover:text-hsBlack hover:bg-hsPink   font-generalSans text-hsWhite rounded-3xl px-10 py-2"
          >
            Send Message
          </button>
        </form>
        {/* )} */}
        <section className="justify-self-end text-hsWhite font-generalSans hidden sm:block">
          <div className="mb-4">
            <h3 className="mb-2 text-sm font-bold uppercase opacity-50">
              Contact Details
            </h3>
            <a href="mailto:hackoverflow@cumail.in">hackoverflow@cumail.in</a>
            <br />
            <a href="tel:+91 7357610734">+91 7357610734</a>
          </div>

          <div className="mb-4">
            <h3 className="mb-2 text-sm font-bold uppercase opacity-50">
              Address
            </h3>
            <p>
              <Link href="/" rel="noreferrer">
                Hackoverflow Sociecty
              </Link>
              ,<br />
              Chandigarh University, Gharuan
              <br />
              Mohali, Punjab, India
            </p>
          </div>

          <div className="mb-4">
            <h3 className="mb-2 text-sm font-bold uppercase opacity-50">
              Social Links
            </h3>
            <div className="flex flex-col">
              <a href="https://www.instagram.com/hackoverflowsociety/">
                Instagram
              </a>
              <a href="https://discord.gg/beWGASaKAt">Discord</a>
              <a href="https://www.facebook.com/HACKOVERFLOW3">Facebook</a>
              <a href="https://twitter.com/Hackoverflow3">Twitter</a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Contact;
