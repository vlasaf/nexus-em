import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Download, Play, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import appInterface from "@/assets/app-interface.png";

interface HeroProps {
  onOpenCalculator: () => void;
}

export const Hero = ({ onOpenCalculator }: HeroProps) => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJoc2woMjE3IDkxJSA2MCUgLyAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary animate-fade-in">
              <Play className="h-4 w-4" />
              {t('hero.badge')}
            </div>
            
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-in break-words hyphens-auto" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              {t('hero.title.part1')}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent break-words">{t('hero.title.highlight')}</span>
              {" "}{t('hero.title.part2')}
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <Button size="lg" asChild className="group w-full sm:w-auto">
                <a href="https://t.me/electronicmushroom" target="_blank" rel="noopener noreferrer">
                  <Send className="mr-2 h-4 w-4" />
                  {t('hero.contactBtn')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" onClick={onOpenCalculator} className="w-full sm:w-auto">
                <Calculator className="mr-2 h-4 w-4" />
                {t('hero.calculatorBtn')}
              </Button>

              <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
                <a href="/Psychometric_Report_Example.pdf" download="Psychometric_Report_Example.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  {t('hero.downloadExampleBtn')}
                </a>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <div className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="mb-2 text-3xl font-bold text-primary">-30%</div>
                <div className="text-sm text-muted-foreground">{t('hero.metrics.turnover')}</div>
              </div>
              
              <div className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="mb-2 text-3xl font-bold text-primary">-20%</div>
                <div className="text-sm text-muted-foreground">{t('hero.metrics.timeToFill')}</div>
              </div>
              
              <div className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="mb-2 text-3xl font-bold text-primary">-40%</div>
                <div className="text-sm text-muted-foreground">{t('hero.metrics.screening')}</div>
              </div>
            </div>
          </div>

          {/* Right Column - App Interface Screenshot */}
          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <div className="relative perspective-1000">
              <img
                src={appInterface}
                alt="Nexus App Interface"
                className="w-full rounded-xl border-2 border-border shadow-2xl transform hover:scale-105 transition-transform duration-500"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(var(--primary-rgb, 217 119 6) / 0.2)'
                }}
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-2xl -z-10 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
