import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, GitBranch, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

export const UseCases = () => {
  const { t } = useTranslation();

  const cases = [
    {
      icon: Users,
      title: t('useCases.list.hiring.title'),
      problem: t('useCases.list.hiring.problem'),
      solution: t('useCases.list.hiring.solution'),
      result: t('useCases.list.hiring.result'),
    },
    {
      icon: TrendingUp,
      title: t('useCases.list.promotions.title'),
      problem: t('useCases.list.promotions.problem'),
      solution: t('useCases.list.promotions.solution'),
      result: t('useCases.list.promotions.result'),
    },
    {
      icon: GitBranch,
      title: t('useCases.list.teams.title'),
      problem: t('useCases.list.teams.problem'),
      solution: t('useCases.list.teams.solution'),
      result: t('useCases.list.teams.result'),
    },
    {
      icon: Award,
      title: t('useCases.list.talent.title'),
      problem: t('useCases.list.talent.problem'),
      solution: t('useCases.list.talent.solution'),
      result: t('useCases.list.talent.result'),
    },
  ];

  return (
    <section className="py-24 bg-muted/30 scroll-mt-20" id="use-cases">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {t('useCases.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('useCases.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {cases.map((useCase, index) => (
              <Card key={index} className="group transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <useCase.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <CardDescription className="text-destructive/80">
                    <strong>{t('useCases.taskLabel')}</strong> {useCase.problem}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">{t('useCases.solutionLabel')}</p>
                    <p className="text-sm">{useCase.solution}</p>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-sm font-semibold text-success">
                      ✓ {useCase.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
