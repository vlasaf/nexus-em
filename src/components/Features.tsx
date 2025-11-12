import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ScanFace, 
  Target, 
  AlertTriangle, 
  Bot, 
  BarChart4, 
  Repeat 
} from "lucide-react";

const features = [
  {
    icon: ScanFace,
    title: "AI-психопрофилирование",
    description: "Точный анализ личности, мотивации, стиля работы и коммуникации каждого человека с AI-расшифровкой",
    highlight: true,
  },
  {
    icon: Bot,
    title: "AI-инструкции по работе",
    description: "Персональные рекомендации, как эффективно работать с каждым сотрудником на основе его психопрофиля",
  },
  {
    icon: Target,
    title: "Подбор лучших кандидатов",
    description: "AI сравнивает психопрофили и выбирает идеальное совпадение для роли и команды",
  },
  {
    icon: AlertTriangle,
    title: "Прогноз совместимости",
    description: "Анализ психотипов для предсказания конфликтов, командной динамики и рисков ухода",
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
              Как работает AI-психопрофилирование
            </h2>
            <p className="text-lg text-muted-foreground">
              От глубокого анализа личности до персональных AI-рекомендаций
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
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${
                    feature.highlight 
                      ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground' 
                      : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                  } transition-colors`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">
                    {feature.title}
                    {feature.highlight && (
                      <span className="ml-2 inline-block text-xs font-semibold text-primary">КИЛЛЕР-ФИЧА</span>
                    )}
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
