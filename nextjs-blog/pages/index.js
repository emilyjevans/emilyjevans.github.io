import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Software developer in training based in Leeds, UK.</p>
      </section>
      <Link href="/posts/about">
        <a>About</a>
      </Link>{" "}
      <Link href="/posts/projects">
        <a>Projects</a>
      </Link>{" "}
      <Link href="/posts/contact">
        <a>Contact</a>
      </Link>
    </Layout>
  );
}
