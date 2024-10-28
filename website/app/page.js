"use client";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Navbar";
import Services from "./components/Services";
import Structure from "./components/Structure";
import WebsiteDesign from "./components/About";
import aboutCards from "./components/data/aboutCards";
import ContactPage from "./components/Contact";
import { font } from "./components/font/titan";
import { font2 } from "./components/font/poppins";
import Link from "next/link";
import { motion } from "framer-motion";
import About from "./components/About-Home";

export default function Home() {
  return (
    <>
      <section className="m-0">
        <Nav />
      </section>
      <section className="relative m-0">
        <div className="z-0 gradient-hero" />
        <Hero />
      </section>
      <section className="m-0">
        <About />
      </section>
      <section className="m-0">
        <Services />
      </section>
      <section className="m-0">
        <Structure />
      </section>
      <section className="m-0">
        <ContactPage />
      </section>
      <section className="m-0">
        <Footer />
      </section>
    </>
  );
}
