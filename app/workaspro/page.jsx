import Footer from "@/components/footer/Footer";
import Section1bar from "@/components/Section1bar";
import Section3 from "@/components/Section3/section3";

import Section9 from "@/components/section9/Section9";

import Section1W from "@/components/WorkasPro/section1/Section1";
import Section2W from "@/components/WorkasPro/section2/section2";
import Section3W from "@/components/WorkasPro/section3/Section3";
import Slider from "@/components/WorkasPro/Slider/slider"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Section1W />
      <Section1bar /> 
      <Section2W />
      <Section3W />
      <Section3 head="Realted Products" />
      <Slider/>
      <Section9 />
      <Footer /> 
    </main>
  );
}
