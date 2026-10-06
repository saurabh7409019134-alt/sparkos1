import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import SocialMediaManagement from "./sections/SocialMediaManagement";
import Portfolio from "./sections/Portfolio";
import Process from "./sections/Process";
import Pricing from "./sections/Pricing";
import WhySparkos from "./sections/WhySparkos";
import Contact from "./sections/Contact";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-sparkos-ink text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SocialMediaManagement />
        <Portfolio />
        <Process />
        <Pricing />
        <WhySparkos />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
