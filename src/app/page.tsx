import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import TOC from "@/components/TOC";
import Overview from "@/components/Overview";
import Venue from "@/components/Venue";
import Timelines from "@/components/Timelines";
import Competitions from "@/components/Competitions";
import CompanyDemos from "@/components/CompanyDemos";
import Keynotes from "@/components/Keynotes";
import NGOAndCultural from "@/components/NGOAndCultural";
import GuidelinesAndJudging from "@/components/GuidelinesAndJudging";
import ConductAndEmergency from "@/components/ConductAndEmergency";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import HandlersAndContact from "@/components/HandlersAndContact";
import Closing from "@/components/Closing";

export default function Home() {
  return (
    <>
      {/* Scroll sync system and canvas background */}
      <SmoothScroll />
      <BackgroundCanvas />

      {/* Floating Center Navbar */}
      <Navbar />

      {/* Sections */}
      <main className="relative z-10 w-full">
        <Hero />
        <Welcome />
        <TOC />
        <Overview />
        <Venue />
        <Timelines day={1} />
        <Competitions />
        <Timelines day={2} />
        <CompanyDemos />
        <Keynotes />
        <NGOAndCultural />
        <GuidelinesAndJudging />
        <ConductAndEmergency />
        <Sponsors />
        <FAQ />
        <HandlersAndContact />
        <Closing />
      </main>
    </>
  );
}


