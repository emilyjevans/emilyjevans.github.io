import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

// https://css-tricks.com/how-to-create-a-contact-form-with-next-js-and-netlify/
// const ContactForm = (
//   <form name="contact-form" method="POST" action="contact/?success=true">
//     <label htmlFor="name">Name</label>
//     <input id="name" name="name" required type="text" />
//     <label htmlFor="company">Company</label>
//     <input id="company" name="company" required type="text" />
//     <label htmlFor="email">E-mail Address</label>
//     <input id="email" type="email" name="email" required />
//     <label htmlFor="message">Message</label>
//     <textarea id="message" name="message" required></textarea>
//     <button type="submit">Submit</button>
//   </form>
// );

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <h3>Contact links</h3>
      <Link href="https://github.com/emilyjevans">
        <a>GitHub</a>
      </Link>
      <br />
      <Link href="https://www.linkedin.com/in/emilyjevans/">
        <a>LinkedIn</a>
      </Link>
      {/* {ContactForm} */}
    </Layout>
  );
}
