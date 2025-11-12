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

const features = [
  {
    icon: Users,
    title: "Психопрофилирование",
    description: "Глубокое психопрофилирование каждого человека на основе валидированной методологии, подтвержденной метаанализами экспериментальной психологии: тип характера, мотивация, стиль коммуникации, рабочие предпочтения. Полный психологический портрет с научной точностью.",
    highlight: true,
  },
  {
    icon: MessageSquare,
    title: "AI-расшифровка и инструкции",
    description: "AI анализирует психопрофиль и генерирует персональные рекомендации: как мотивировать, общаться, делегировать задачи этому человеку. Готовые сценарии для каждой ситуации.",
    highlight: true,
  },
  {
    icon: Target,
    title: "Подбор лучших кандидатов",
    description: "AI сравнивает существующие психопрофили и выбирает идеальное совпадение для роли и команды",
  },
  {
    icon: AlertTriangle,
    title: "AI-прогноз совместимости",
    description: "AI анализирует психопрофили для предсказания конфликтов, командной динамики и рисков ухода",
  },
  {
    icon: BarChart4,
    title: "Дашборды и аналитика",
    description: "Визуализация психопрофилей команды, метрик совместимости и трендов",
  },
  {
    icon: Repeat,
    title: "Формирование команд",
    description: "Оптимальный подбор людей в команды с учетом психологической совместимости",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Как работает система
            </h2>
            <p className="text-lg text-muted-foreground">
              От научного психопрофилирования до AI-расшифровки и персональных рекомендаций
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`group transition-all hover:shadow-md ${
                  feature.highlight 
                    ? 'border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5 hover:border-primary' 
                    : 'hover:border-primary/30'
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${
                      feature.highlight 
                        ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground' 
                        : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                    } transition-colors`}>
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
