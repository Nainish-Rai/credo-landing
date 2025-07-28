import { CTASection } from "@/components/CTASection";
import { FaqSection } from "@/components/FAQSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FooterSection } from "@/components/FooterSection";
import { HeroSection } from "@/components/HeroSection";
import { LogosSections } from "@/components/LogosSection";
import { MainFeatureSection } from "@/components/MainFeatureSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full  flex flex-col items-center overflow-hidden ">
      <HeroSection />
      <LogosSections />
      <MainFeatureSection />
      <FeaturesSection />
      <CTASection />
      <TestimonialSection />
      <PricingSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
