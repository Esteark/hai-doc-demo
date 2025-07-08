"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import GetStart from "./components/GetStart";
import Footer from "./components/Footer";
import SliderLogos from "./components/SliderLogos";
import Services from "./components/Services";
import SpecialServices from "./components/SpecialServices";
import OurDoctors from "./components/OurDoctors";

export default function Home() {
  return (
    <section className="font-[family-name:var(--font-poppins)]">
      <Navbar />
      <Header />
      <SliderLogos />
      <Services />
      <SpecialServices />
      <OurDoctors />
      <GetStart />
      <Footer />
    </section>
  );
}
