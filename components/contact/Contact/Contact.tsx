import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { signIn, useSession } from "next-auth/react";
function Contact() {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [message, setMessage] = useState("");
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      //   @ts-ignore
      setName(session.user.name);
      //   @ts-ignore
      setMail(session.user.email);
    } else {
      signIn("", {
        callbackUrl: process.env.NEXTAUTH_URL
          ? process.env.NEXTAUTH_URL
          : "http://localhost:3000",
      });
    }
  }, [session]);
  return (
    <main className="my-14 space-y-10 px-10 relative z-10">
      <figure
        aria-hidden
        className="rounded-full bg-hsBlue blur-3xl absolute -top-10 -left-10   w-52 h-52 -z-10"
      >
        <figure aria-hidden className=" bg-hsPink h-32 w-32 -z-10 ">
          <figure aria-hidden className=" bg-red-500 h-7 w-7 -z-10" />
        </figure>
      </figure>

      <h1 className="font-clashDisplay font-medium text-7xl text-white">
        Contact Us
      </h1>
      <section className="flex justify-between">
        <form
          className="flex flex-col gap-9 w-96 md:w-[500px] mt-5"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            value={name}
            alt="enter name"
            name="name"
            type="text"
            placeholder="Enter your Name"
            className="bg-transparent tracking-wider border-b  px-3 pb-2 font-generalSans text-lg  text-hsWhite border-b-white focus:outline-none focus:border-b-white"
            required
            readOnly
          />

          <input
            value={email}
            alt="email field"
            name="email"
            type="email"
            placeholder="Enter your Email"
            className="bg-transparent tracking-wider border-b  px-3 pb-2 border-b-white text-lg  font-generalSans text-hsWhite focus:outline-none focus:border-b-white"
            required
            readOnly
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            placeholder="Message"
            className="bg-transparent tracking-wider border-b  px-3 pb-2 border-b-white text-lg  font-generalSans text-hsWhite  focus:outline-none focus:border-b-white"
            required
            autoComplete="false"
            rows={3}
          />

          <button
            type="submit"
            className="self-start border border-white hover:border-hsPink duration-300 ease-out hover:text-hsBlack hover:bg-hsPink hover:font-bold  font-generalSans text-hsWhite rounded-3xl px-10 py-2"
          >
            Send Message
          </button>
        </form>

        <section className="justify-self-end text-hsWhite font-generalSans ">
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
