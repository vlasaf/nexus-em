import { useState } from "react";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { ProblemSolution } from "@/components/ProblemSolution";
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
      <SocialProof />
      <ProblemSolution />
      <ROICalculator />
      <UseCases />
      <HowItWorks />
      <Features />
      <Integrations />
      <FAQ />
      <FinalCTA onOpenDemo={() => setDemoModalOpen(true)} />
      <Footer />
      
      <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </div>
  );
};

export default Index;
