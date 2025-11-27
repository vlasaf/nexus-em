import { Card, CardContent } from "@/components/ui/card";
import { Database, Zap, BarChart3, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";

export const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Database,
      title: t('howItWorks.steps.profiling.title'),
      description: t('howItWorks.steps.profiling.description'),
      color: "text-chart-1",
      bgColor: "bg-chart-1/10"
    },
    {
      icon: Zap,
      title: t('howItWorks.steps.integrations.title'),
      description: t('howItWorks.steps.integrations.description'),
      color: "text-chart-2",
      bgColor: "bg-chart-2/10"
    },
    {
      icon: BarChart3,
      title: t('howItWorks.steps.analysis.title'),
      description: t('howItWorks.steps.analysis.description'),
      color: "text-chart-3",
      bgColor: "bg-chart-3/10"
    },
    {
      icon: Lightbulb,
      title: t('howItWorks.steps.recommendations.title'),
      description: t('howItWorks.steps.recommendations.description'),
      color: "text-chart-4",
      bgColor: "bg-chart-4/10"
    }
  ];

  return (
    <section className="py-24 bg-background scroll-mt-20" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{t('howItWorks.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('howItWorks.subtitle')}
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-6 top-12 hidden h-[calc(100%-96px)] w-0.5 bg-gradient-to-b from-chart-1 via-chart-2 via-chart-3 to-chart-4 lg:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card key={index} className="relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${step.bgColor} ${step.color}`}>
                        <step.icon className="h-6 w-6" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-3">
                          <span className="text-sm font-bold text-muted-foreground">{t('howItWorks.step')} {index + 1}</span>
                          <div className="h-px flex-1 bg-border" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-xl border bg-card p-8 text-center">
            <p className="text-lg font-medium mb-4">
              {t('howItWorks.timeline')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('howItWorks.note')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
