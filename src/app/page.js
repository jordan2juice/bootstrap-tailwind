"use client";

import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroSection from "./components/heroSection";
import "bootstrap/dist/css/bootstrap.min.css";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </main>
  );
}
