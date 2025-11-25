import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const tiers = [
  {
    name: "Оцифровка персонала",
    price: "3 000 ₽",
    priceUnit: "за сотрудника",
    features: [
      "Личный профиль человека (мотивация, стиль мышления, риски)",
      "Дашборды с метриками для заказчика (HR/руководителя)",
      "AI-анализ компании на трех уровнях (Компания/команда/человек)",
      "AI-консалтинг состояния компании и советы по увеличению эффективности управления персоналом",
    ],
    highlighted: false,
  },
  {
    name: "Команды и найм",
    price: "5 000 ₽",
    priceUnit: "за сотрудника",
    badge: "Популярный",
    features: [
      "Все возможности тарифа «Оцифровка персонала»",
      "Формирование самых эффективных команд и отделов",
      "Найм сотрудников с учетом всех тонкостей человеческих профилей",
    ],
    highlighted: true,
  },
  {
    name: "AI-copilot",
    price: "Индивидуально",
    priceUnit: "",
    badge: "Премиум",
    features: [
      "Все возможности тарифа «Команды и найм»",
      "Ответы на любые HR-вопросы с помощью кастомного AI",
      "Обучение на знаниях о вашей компании и психопрофилях работников",
    ],
    highlighted: false,
  },
];

export const PricingTiers = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Тарифные планы
            </h2>
            <p className="text-lg text-muted-foreground">
              Выберите подходящий уровень решения для ваших HR-задач
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
              Все тарифы включают техническую поддержку и регулярные обновления
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
