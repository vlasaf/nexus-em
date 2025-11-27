import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const PricingTiers = () => {
  const { t, i18n } = useTranslation();

  const tiers = [
    {
      id: "digitization",
      name: t('pricing.tiers.digitization.name'),
      price: i18n.language === 'en' ? "$3,000" : "3 000 ₽",
      priceUnit: t('pricing.tiers.digitization.priceUnit'),
      features: t('pricing.tiers.digitization.features', { returnObjects: true }) as string[],
      highlighted: false,
    },
    {
      id: "teams",
      name: t('pricing.tiers.teams.name'),
      price: i18n.language === 'en' ? "$7,000" : "7 000 ₽",
      originalPrice: i18n.language === 'en' ? "$10,000" : "10 000 ₽",
      priceUnit: t('pricing.tiers.teams.priceUnit'),
      badge: t('pricing.tiers.teams.badge'),
      features: t('pricing.tiers.teams.features', { returnObjects: true }) as string[],
      highlighted: true,
    },
    {
      id: "copilot",
      name: t('pricing.tiers.copilot.name'),
      price: t('pricing.tiers.copilot.price'),
      priceUnit: "",
      badge: t('pricing.tiers.copilot.badge'),
      features: t('pricing.tiers.copilot.features', { returnObjects: true }) as string[],
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {t('pricing.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('pricing.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 ${
                  tier.highlighted 
                    ? 'border-primary shadow-lg hover:shadow-xl scale-105' 
                    : 'hover:shadow-md hover:-translate-y-1'
                }`}
              >
                {tier.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge variant={tier.highlighted ? "default" : "secondary"}>
                      {tier.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className={tier.highlighted ? "bg-primary/5" : ""}>
                  <CardTitle className="text-2xl mb-4">{tier.name}</CardTitle>
                  <div className="space-y-1">
                    {tier.originalPrice && (
                      <div className="text-lg text-muted-foreground line-through">
                        {tier.originalPrice}
                      </div>
                    )}
                    <div className="text-3xl font-bold text-primary">
                      {tier.price}
                    </div>
                    {tier.priceUnit && (
                      <p className="text-sm text-muted-foreground">{tier.priceUnit}</p>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              {t('pricing.note')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
