import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import interfaceCopilot from "@/assets/interface-copilot.png";
import interfaceAnalytics from "@/assets/interface-analytics.png";
import interfaceCandidates from "@/assets/interface-candidates.png";
import interfacePaei from "@/assets/interface-paei.png";

const interfaceScreenshots = [
  {
    id: "copilot",
    title: "AI Copilot",
    description: "Умный ассистент для анализа психопрофилей сотрудников с доступом ко всем данным компании",
    image: interfaceCopilot,
  },
  {
    id: "analytics",
    title: "Аналитика личности",
    description: "Детальные графики черт личности, устойчивости и аффекта с количественными показателями",
    image: interfaceAnalytics,
  },
  {
    id: "candidates",
    title: "База кандидатов",
    description: "Оценка соответствия кандидатов с психотипами, командным потенциалом и лидерскими качествами",
    image: interfaceCandidates,
  },
  {
    id: "paei",
    title: "PAEI балансировка",
    description: "Анализ распределения управленческих ролей и рекомендации по оптимизации команды",
    image: interfacePaei,
  },
];

export const InterfaceShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Интерфейс платформы
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Интуитивный и современный интерфейс для работы с психопрофилями и аналитикой
            </p>
          </div>

          <Tabs defaultValue="copilot" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-muted/50 p-2">
              {interfaceScreenshots.map((item) => (
                <TabsTrigger 
                  key={item.id} 
                  value={item.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  {item.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {interfaceScreenshots.map((item) => (
              <TabsContent key={item.id} value={item.id} className="mt-8">
                <Card className="overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden bg-muted/30">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-auto transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
