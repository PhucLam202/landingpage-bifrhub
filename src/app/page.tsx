import Head from "next/head";
import { navItems } from "@/app/types/data";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import { Bento } from "./components/Bento";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { FloatingNav } from"./components/ui/floatingNav"
export default function Home() {
  return (
    <>
      <Head>
        <title>Your Name | Portfolio</title>
      </Head>

      {/* <Header /> */}

      <main className="scroll-smooth relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
        {/* <FloatingNav navItems={navItems} /> */}
        <div className="w-full">
          <section id="hero">
            <Hero />
          </section>
          <section id="bento">
            <Bento />
          </section>
          <section id="project">
            <Projects />
          </section>
          <section id="experience">
            <Experience />
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
