import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Play, Send } from "lucide-react";
interface HeroProps {
  onOpenCalculator: () => void;
}
export const Hero = ({
  onOpenCalculator
}: HeroProps) => {
  return <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJoc2woMjE3IDkxJSA2MCUgLyAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary animate-fade-in">
            <Play className="h-4 w-4" />
            AI-копилот для HR-решений
          </div>
          
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-in break-words hyphens-auto" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Точное{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent break-words">психопрофилирование</span>
            {" "}сотрудников и кандидатов для умных HR-решений
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>Научно валидированная методология оценки личности • AI-расшифровка характеристик и прогноз совместимости • Персональные рекомендации по работе с каждым • Снижение текучести и ошибок найма</p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <Button size="lg" asChild className="group w-full sm:w-auto">
              <a href="https://t.me/electronicmushroom" target="_blank" rel="noopener noreferrer">
                <Send className="mr-2 h-4 w-4" />
                Связаться через Telegram
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button size="lg" variant="outline" onClick={onOpenCalculator} className="w-full sm:w-auto">
              <Calculator className="mr-2 h-4 w-4" />
              Рассчитать экономию
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="mb-2 text-3xl font-bold text-primary">-30%</div>
              <div className="text-sm text-muted-foreground">Ранняя текучесть в первые 90 дней</div>
            </div>
            
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="mb-2 text-3xl font-bold text-primary">-20%</div>
              <div className="text-sm text-muted-foreground">Время закрытия вакансии</div>
            </div>
            
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="mb-2 text-3xl font-bold text-primary">-40%</div>
              <div className="text-sm text-muted-foreground">Время скрининга кандидатов</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};