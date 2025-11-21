import { PersonalityCharts } from "./demo/PersonalityCharts";
import { PAEIProfile } from "./demo/PAEIProfile";
import { CandidateCards } from "./demo/CandidateCards";
import { AICopilot } from "./demo/AICopilot";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ProductShowcase = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Интерфейс платформы
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Удобные инструменты для анализа, подбора и развития персонала
          </p>
        </div>

        <Tabs defaultValue="analytics" className="space-y-8">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
            <TabsTrigger value="analytics">Аналитика</TabsTrigger>
            <TabsTrigger value="paei">PAEI</TabsTrigger>
            <TabsTrigger value="hiring">Подбор</TabsTrigger>
            <TabsTrigger value="copilot">AI Copilot</TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-6 animate-fade-in">
            <PersonalityCharts />
          </TabsContent>

          <TabsContent value="paei" className="animate-fade-in">
            <div className="max-w-3xl mx-auto">
              <PAEIProfile />
            </div>
          </TabsContent>

          <TabsContent value="hiring" className="animate-fade-in">
            <CandidateCards />
          </TabsContent>

          <TabsContent value="copilot" className="animate-fade-in">
            <div className="max-w-3xl mx-auto">
              <AICopilot />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
