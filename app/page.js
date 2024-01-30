import FirstSection from "./components/Home/FirstSection";
import AboutusSection from "./components/Home/AboutusSection";
import PortfolioSection from "./components/Home/PortfolioSection";
import ServiceSection from "./components/Home/ServiceSection";
import WorkProcess from "./components/Home/WorkProcess";
import ContactSection from "./components/Home/ContactSection";

export default function Home() {
  return (
    <main className="">
       <FirstSection />
        <div className='bg-white'>
          <AboutusSection />
          <PortfolioSection />
        </div>
        <div className="bg-darkBlack my-10">
          <ServiceSection />
        </div>
        <WorkProcess />
        <div className="bg-lightGray mb-10">
          <ContactSection />
        </div>
    </main>
  );
}