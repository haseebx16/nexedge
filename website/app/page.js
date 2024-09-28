import Hero from "./components/Hero";
import Nav from "./components/Navbar";

export default function Home() {
  return (
      <>
        <section>
            <Nav/>
        </section>
        <section>
          <Hero/>
        </section>
      </>
  );
}
