import { Header } from "@/components/layout/Header";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { AboutSection } from "@/components/sections/AboutSection";
import { CapabilitySection } from "@/components/sections/CapabilitySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ProductLaunchSection } from "@/components/sections/ProductLaunchSection";
import { StatsSection } from "@/components/sections/StatsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProductLaunchSection />
        <CapabilitySection />
        <PartnersSection />
        <StatsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
