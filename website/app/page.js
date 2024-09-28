import Hero from "./components/Hero";
import Nav from "./components/Navbar";
import WebsiteDesign from "./components/Website-Design";

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
      </>
  );
}
