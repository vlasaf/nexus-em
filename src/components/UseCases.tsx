import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, GitBranch, Award } from "lucide-react";

const cases = [
  {
    icon: Users,
    title: "Найм",
    problem: "Не понятно, подойдет ли кандидат команде и культуре компании",
    solution: "AI создает психопрофиль кандидата и сравнивает с профилями команды. Выдает прогноз совместимости и рекомендации по работе с ним",
    result: "Снижение ранней текучести на 30%, идеальное попадание в культуру",
  },
  {
    icon: TrendingUp,
    title: "Повышение и назначения",
    problem: "Риск назначить не того человека на ключевую позицию",
    solution: "Оценка потенциала роста, совместимости с новой ролью и командой",
    result: "Успешность назначений +45%, меньше конфликтов при перемещениях",
  },
  {
    icon: GitBranch,
    title: "Формирование команд",
    problem: "Команды конфликтуют из-за несовместимости характеров",
    solution: "AI анализирует психопрофили и подбирает оптимальный состав команды. Предупреждает о потенциальных конфликтах и дает рекомендации по управлению",
    result: "Продуктивность команд +25%, на 40% меньше конфликтов",
  },
  {
    icon: Award,
    title: "Управление талантами",
    problem: "Не понимаем мотивацию сотрудников, теряем лучших людей",
    solution: "Психопрофиль раскрывает истинные мотиваторы каждого. AI дает персональные рекомендации по удержанию, развитию и мотивации талантов",
    result: "Удержание ключевых сотрудников +35%, точечная работа с каждым",
  },
];

export const UseCases = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Кейсы использования
            </h2>
            <p className="text-lg text-muted-foreground">
              От найма до управления талантами — AI помогает на всех этапах
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {cases.map((useCase, index) => (
              <Card key={index} className="group transition-all hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <useCase.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{useCase.title}</CardTitle>
                  <CardDescription className="text-destructive/80">
                    <strong>Задача:</strong> {useCase.problem}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Что делает бот:</p>
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
