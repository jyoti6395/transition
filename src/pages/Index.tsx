import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import SuperAppSection from "@/components/landing/SuperAppSection";
import AboutSection from "@/components/landing/AboutSection";
import DoctorSection from "@/components/landing/DoctorSection";
import ProgramsSection from "@/components/landing/ProgramsSection";
import TrackSection from "@/components/landing/TrackSection";
import AIAssistantSection from "@/components/landing/AIAssistantSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <SuperAppSection />
    <AboutSection />
    <DoctorSection />
    <ProgramsSection />
    <TrackSection />
    <AIAssistantSection />
    <TestimonialsSection />
    <PricingSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
