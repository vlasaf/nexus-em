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
    title: "Оцифровка компетенций",
    description: "Валидированные оценки hard и soft skills всего штата",
  },
  {
    icon: Target,
    title: "Best-candidate selection",
    description: "AI выбирает лучшего из хороших по объективным критериям",
  },
  {
    icon: AlertTriangle,
    title: "Совместимость и риски",
    description: "Прогноз конфликтов, оценка fit в команду, риски ухода",
  },
  {
    icon: Bot,
    title: "AI-копилот подсказок",
    description: "Рекомендации действий на основе данных и трендов",
  },
  {
    icon: BarChart4,
    title: "Отчеты и дашборды",
    description: "Real-time визуализация состояния штата и метрик",
  },
  {
    icon: Repeat,
    title: "Внутренние перемещения",
    description: "Карьерные треки и ротации с учетом потенциала",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Функции продукта
            </h2>
            <p className="text-lg text-muted-foreground">
              Полный набор инструментов для современного HR
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="group transition-all hover:shadow-md hover:border-primary/30">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
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
