import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Navbar";
import Services from "./components/Services";
import Structure from "./components/Structure";
import WebsiteDesign from "./components/About";

export default function Home() {
  return (
      <>
        <section>
            <Nav/>
        </section>
        <section>
          <Hero/>
        </section>
        <section>
          <WebsiteDesign/>
        </section>
        <section>
          <Services/>
        </section>
        <section>
          <Structure/>
        </section>
        <section>
          <Footer/>
        </section>
      </>
  );
}
