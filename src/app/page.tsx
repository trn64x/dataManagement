import GridBackground from "@/components/background/GridBackground";
import CtaButton from "@/components/buttons/CtaButton";
import Header from "@/components/header/Header";
import BrandWave from "@/components/pearls/BrandWave";
import HeroSection from "@/components/sections/HeroSection";
import TextGradient from "@/components/text/TextGradient";
import { Fade } from "react-awesome-reveal";


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection/>
      <BrandWave/>
    </>
  );
}
