import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhyItMatters } from "./components/WhyItMatters";
import { PackagesSection } from "./components/PackagesSection";
import { LocalAreaSection } from "./components/LocalAreaSection";
import { CredibilitySection } from "./components/CredibilitySection";
import { CTASection } from "./components/CTASection";
import { ContactForm } from "./components/ContactForm";
import { LandingFooter } from "./components/LandingFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-foam text-ink">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <WhyItMatters />
        <PackagesSection />
        <LocalAreaSection />
        <CredibilitySection />
        <CTASection />
        <ContactForm />
      </main>
      <LandingFooter />
    </div>
  );
}
