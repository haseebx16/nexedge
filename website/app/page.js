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
        
          <div className={`${font.className} gradient-website h-auto p-20 space-y-16 flex flex-col justify-center items-center`}>
              <div className='text-center'>
                  <p className='text-4xl mt-4 font-extrabold text-orange-500'>About Us & What We Do</p>
                  <p className='text-xl font-light mt-4 text-white max-w-3xl mx-auto'>Our technology team is enterprise-grade, and we excel at application design & development, delivering beautiful high-performance websites. Our team of experts mixes the future of web design with first-grade technology, resulting in an excellent user experience. We emphasize digital product design and development to make you look good where it counts — online.</p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {aboutCards.map((service) => (
                      <Link href={service.href} key={service.id}>
                          <div className='relative shadow-2xl group'>
                              <img src={service.src} alt={service.label} className='w-full h-64 object-cover rounded-lg' />
                              <div className='absolute inset-0 bg-black group-hover:opacity-40 rounded-lg opacity-90 transition-opacity duration-300'></div>
                              <div className='absolute inset-0 flex justify-center items-center'>
                                  <p className='text-white text-2xl font-light text-center p-4'>{service.label}</p>
                              </div>
                          </div>
                      </Link>
                  ))}
              </div>
          </div>
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
