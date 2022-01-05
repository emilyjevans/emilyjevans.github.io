import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <h1>Projects</h1>
      <h2>Giggle</h2>
      <p>
        For the final group project on the Northcoders course, we created
        "Giggle", a messaging app which aims to connect music fans in the same
        local area. Users are able to browse through events filtered by their
        favourite music genre and location, follow a link to buy tickets and
        join chat groups with other interested users.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/TZf-7yd3riI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <br />
      <p>Tech used: React Native | Firebase | Ticketmaster API | Node.js</p>
      <h2>What's the Goss</h2>
      <p>
        This project is a simple news website where users can view articles,
        filter by topic, post and delete comments and add kudos to their
        favourite article. Users are required to login to view and interact with
        the content. Users also have the option to use a light or dark mode.
      </p>
      <Link href="https://mystifying-einstein-e278c9.netlify.app/">
        <a>View the hosted app here</a>
      </Link>
      <br />
      <br />
      <Image
        src="/images/WhatsTheGoss.png"
        height={691}
        width={524}
        alt="What's the Goss screenshot"
      />
      <p>Tech used: React | CSS | Express | PostgreSQL | API | Node.js </p>
    </Layout>
  );
}
