import Head from "next/head";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import { Bento } from "./components/Bento";
//import Projects from "./components/Projects";
import { FAQSection } from  "./components/faq";
import Footer from "./components/Footer";
import Header from "@/app/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Name | Portfolio</title>
      </Head>

      <Header />

      <main className="scroll-smooth relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
        {/* <FloatingNav navItems={navItems} /> */}
        <div className="w-full">
          <section id="hero">
            <Hero />
          </section>
          <section id="hero">
            <Bento />
          </section>          
          <section id="faqsection">
            <FAQSection />
          </section>
          <section id="footer">
            <Footer />
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
