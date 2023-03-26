import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurPeople from "../components/OurPeople";
import About from "../components/About";
import NextSteps from "../components/NextSteps";
import Ministries from "@/components/Ministries";
import Events from "../components/Events";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "./globals.css";
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
