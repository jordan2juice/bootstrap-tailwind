'use client';

import Image from "next/image";
import NavBar from "./componets/NavBar";
import HeroSection from "./componets/heroSection";
import "bootstrap/dist/css/bootstrap.min.css";
import FeatureSection from "./componets/FeatureSection";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <FeatureSection />
    </main>
  );
}
