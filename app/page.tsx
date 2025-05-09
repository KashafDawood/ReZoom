import Benefits from "@/components/custom/benefits";
import CTA from "@/components/custom/cta";
import FAQ from "@/components/custom/faq";
import HeroSection from "@/components/custom/hero-section";
import HowItWorks from "@/components/custom/how-it-works";
import ResumeForm from "@/components/custom/resume-form";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <ResumeForm />
        <Benefits />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}
