import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-accent py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJoc2woMCAwJSAxMDAlIC8gMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center text-primary-foreground">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t('finalCta.title')}
          </h2>
          
          <p className="mb-8 text-lg opacity-90">
            {t('finalCta.subtitle')}
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              variant="secondary"
              asChild
              className="group w-full sm:w-auto"
            >
              <a href="https://t.me/electronicmushroom" target="_blank" rel="noopener noreferrer">
                <Send className="mr-2 h-5 w-5" />
                {t('finalCta.contactBtn')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-4 backdrop-blur-sm">
              <div className="mb-1 text-2xl font-bold">{t('finalCta.timeline.weeks')}</div>
              <div className="text-sm opacity-90">{t('finalCta.timeline.implementation')}</div>
            </div>
            
            <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-4 backdrop-blur-sm">
              <div className="mb-1 text-2xl font-bold">{t('finalCta.timeline.month')}</div>
              <div className="text-sm opacity-90">{t('finalCta.timeline.firstResults')}</div>
            </div>
            
            <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-4 backdrop-blur-sm">
              <div className="mb-1 text-2xl font-bold">{t('finalCta.timeline.months')}</div>
              <div className="text-sm opacity-90">{t('finalCta.timeline.fullPayback')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
