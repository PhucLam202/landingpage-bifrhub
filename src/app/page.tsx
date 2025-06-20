import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Bento from "./components/Bento";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Name | Portfolio</title>
      </Head>

      {/* <Header /> */}

      <main className="scroll-smooth relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
        <div className="max-w-7xl w-full">
          <section id="hero">
            <Hero />
          </section>
          <section id="bento">
            <Bento />
          </section>
        </div>
        {/* <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section> */}
      </main>
      {/* <Footer/> */}
    </>
  );
}
