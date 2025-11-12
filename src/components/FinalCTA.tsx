import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

interface FinalCTAProps {
  onOpenDemo: () => void;
}

export const FinalCTA = ({ onOpenDemo }: FinalCTAProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-accent py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJoc2woMCAwJSAxMDAlIC8gMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center text-primary-foreground">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Начните трансформацию HR сегодня
          </h2>
          
          <p className="mb-8 text-lg opacity-90">
            Запросите демонстрацию и узнайте, как AI поможет снизить текучесть, ускорить найм 
            и сэкономить до 2М₽ за полгода
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={onOpenDemo}
              className="group w-full sm:w-auto"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Запросить демо
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-4 backdrop-blur-sm">
              <div className="mb-1 text-2xl font-bold">2-4 недели</div>
              <div className="text-sm opacity-90">Внедрение</div>
            </div>
            
            <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-4 backdrop-blur-sm">
              <div className="mb-1 text-2xl font-bold">1 месяц</div>
              <div className="text-sm opacity-90">До первых результатов</div>
            </div>
            
            <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-4 backdrop-blur-sm">
              <div className="mb-1 text-2xl font-bold">6 месяцев</div>
              <div className="text-sm opacity-90">До полной окупаемости</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
