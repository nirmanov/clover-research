import Image from "next/image";
import styles from "./page.module.scss";
import Hero from "@/components/Hero";
import AboutClover from "@/components/AboutClover";
import GreenWrapper from "@/components/GreenWrapper";
import ThreePhones from "@/components/ThreePhones";
import Prototypes from "@/components/Prototypes";
import ResearchDesk from "@/components/ResearchDesk";
import LightWrapper from "@/components/LightWrapper";
import Slider from "@/components/Slider";
import CloverFeatures from "@/components/CloverFeatures";
import TypesOfResearch from "@/components/TypesOfResearch";
import AndroidApp from "@/components/AndroidApp";
import Functional from "@/components/Functional";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <AboutClover />
      <GreenWrapper>
        <ThreePhones />
        <Prototypes />
        <ResearchDesk />
      </GreenWrapper>
      <LightWrapper>
        <Slider />
        <Functional />
      </LightWrapper>
      <CloverFeatures />
      <TypesOfResearch />
      <AndroidApp />
    </main>
  );
}
