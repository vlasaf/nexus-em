import { useState } from "react";
import { Hero } from "@/components/Hero";
import { ROICalculator } from "@/components/ROICalculator";
import { UseCases } from "@/components/UseCases";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Integrations } from "@/components/Integrations";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { DemoModal } from "@/components/DemoModal";

const Index = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Hero 
        onOpenDemo={() => setDemoModalOpen(true)} 
        onOpenCalculator={scrollToCalculator}
      />
      <div className="animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        <Features />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
        <UseCases />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
        <ROICalculator />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
        <HowItWorks />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
        <Integrations />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
        <FAQ />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
        <FinalCTA onOpenDemo={() => setDemoModalOpen(true)} />
      </div>
      <Footer />
      
      <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </div>
  );
};

export default Index;
