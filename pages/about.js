import Head from "next/head";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import "../src/app/globals.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Traditional Health Center</title>
        <meta name="description" content="Traditional Health Center in India" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
