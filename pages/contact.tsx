import Head from "next/head";
import Contact from "../components/contact/Contact/Contact";

function contact() {
  return (
    <main>
      <Head>
        <title>Hackoverflow / Contact Us</title>
        <meta
          name="description"
          content="Looking to get in touch with us? Our contact us page has all the information you need to get in touch with our team. Whether you have a question, comment, or suggestion, we'd love to hear from you. Contact us by phone, email, or through our online form and we'll get back to you as soon as possible. We look forward to hearing from you!"
        />
      </Head>
      <Contact />
    </main>
  );
}

export default contact;
