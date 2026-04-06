"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Partners from "@/components/Partners";
import ClientSpace from "@/components/ClientSpace";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const toggle = () => setLang((l) => (l === "fr" ? "en" : "fr"));

  return (
    <>
      <Navbar lang={lang} onLangToggle={toggle} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Services lang={lang} />
        <Projects lang={lang} />
        <Partners lang={lang} />
        <ClientSpace lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}