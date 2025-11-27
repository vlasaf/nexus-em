import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users,
  MessageSquare,
  Target, 
  AlertTriangle, 
  BarChart4, 
  Repeat,
  Star
} from "lucide-react";
import { useTranslation } from "react-i18next";

export const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Users,
      title: t('features.list.profiling.title'),
      description: t('features.list.profiling.description'),
      highlight: true,
    },
    {
      icon: MessageSquare,
      title: t('features.list.aiAnalysis.title'),
      description: t('features.list.aiAnalysis.description'),
      highlight: true,
    },
    {
      icon: Target,
      title: t('features.list.selection.title'),
      description: t('features.list.selection.description'),
    },
    {
      icon: AlertTriangle,
      title: t('features.list.compatibility.title'),
      description: t('features.list.compatibility.description'),
    },
    {
      icon: BarChart4,
      title: t('features.list.dashboards.title'),
      description: t('features.list.dashboards.description'),
    },
    {
      icon: Repeat,
      title: t('features.list.teamBuilding.title'),
      description: t('features.list.teamBuilding.description'),
    },
  ];

  return (
    <section className="py-24 bg-background scroll-mt-20" id="features">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {t('features.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  feature.highlight 
                    ? 'border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5 hover:border-primary' 
                    : 'hover:border-primary/30'
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 ${
                      feature.highlight 
                        ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground group-hover:scale-110' 
                        : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110'
                    }`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    {feature.highlight && (
                      <Badge variant="default" className="bg-gradient-to-r from-primary to-accent border-0 shadow-sm p-1.5">
                        <Star className="h-3.5 w-3.5 fill-current" />
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg mt-4">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
