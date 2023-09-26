import Head from "next/head";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import OurPeople from "../src/components/OurPeople";
import About from "../src/components/About";
import NextSteps from "../src/components/NextSteps";
import Ministries from "@/components/Ministries";
import Events from "../src/components/Events";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import "../src/app/globals.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nabhiyog Foundation</title>
        <meta name="description" content="Nabhiyog Foundation in India" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <About />
      <NextSteps />
      <Ministries />
      <Events />
      <OurPeople />
      <Contact />
      <Footer />
    </>
  );
}
