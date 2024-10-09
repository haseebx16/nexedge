"use client";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Navbar";
import Services from "./components/Services";
import Structure from "./components/Structure";
import WebsiteDesign from "./components/About";
import aboutCards from "./components/data/aboutCards"
import ContactPage from "./components/Contact";
import { font } from "./components/font/titan";
import { font2 } from "./components/font/poppins";
import Link from "next/link";
import { motion } from "framer-motion";
import About from "./components/About-Home";

export default function Home() {

  
  return (
      <>
        <section>
            <Nav/>
        </section>
        <section className="relative">
          <div className="z-0 gradient-hero"/>
          <Hero/>
        </section>
        <section >
          <About/>
        </section>
        <section>
          <Services/>
        </section>
        <section>
          <Structure/>
        </section>
        <section>
          <ContactPage/>
        </section>
        <section>
          <Footer/>
        </section>
      </>
  );
}
