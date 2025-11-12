import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Play } from "lucide-react";
interface HeroProps {
  onOpenDemo: () => void;
  onOpenCalculator: () => void;
}
export const Hero = ({
  onOpenDemo,
  onOpenCalculator
}: HeroProps) => {
  return <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJoc2woMjE3IDkxJSA2MCUgLyAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Play className="h-4 w-4" />
            AI-копилот для HR-решений
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Снижайте текучесть и ускоряйте закрытие позиций с{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI-HR копайлотом</span>
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">Оцифровка штата • Выбор лучших кандидатов • Прогноз рисков и совместимости • Формирование команд • AI-подсказки действий • Прозрачные дашборды</p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" onClick={onOpenDemo} className="group w-full sm:w-auto">
              Запросить демо
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button size="lg" variant="outline" onClick={onOpenCalculator} className="w-full sm:w-auto">
              <Calculator className="mr-2 h-4 w-4" />
              Рассчитать экономию
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-2 text-3xl font-bold text-primary">-30%</div>
              <div className="text-sm text-muted-foreground">Ранняя текучесть в первые 90 дней</div>
            </div>
            
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-2 text-3xl font-bold text-primary">-20%</div>
              <div className="text-sm text-muted-foreground">Время закрытия вакансии</div>
            </div>
            
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-2 text-3xl font-bold text-primary">-40%</div>
              <div className="text-sm text-muted-foreground">Время скрининга кандидатов</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};