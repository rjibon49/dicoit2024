import FirstSection from "./components/Home/FirstSection";
import AboutusSection from "./components/Home/AboutusSection";
import PortfolioSection from "./components/Home/PortfolioSection";
import ServiceSection from "./components/Home/ServiceSection";

export default function Home() {
  return (
    <main className="">
       <FirstSection />
        <div className='bg-white'>
          <AboutusSection />
          <PortfolioSection />
        </div>
        <div className="bg-darkBlack my-10" id="service">
          <ServiceSection />
        </div>
    </main>
  );
}