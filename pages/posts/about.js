import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <h1>About me</h1>
      <p>
        I'm a big believer in the <i>"squiggly career"</i> which I think is
        reflected in my professional experience. I studied Meteorology and
        Climate Science at university, where I was able to study abroad for a
        year in Australia. Following university and some further travelling, I
        took up a role in the insurance industry in the field of catastrophe
        modelling. While I still have an interest in the environment and natural
        sciences, through these experiences I found that my interest for coding
        grew, and mid-2021 I took the leap into the tech industry by taking part
        in the Northcoders bootcamp.
      </p>
    </Layout>
  );
}
