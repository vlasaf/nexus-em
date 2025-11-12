import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

const problems = [
  "Высокая текучесть в первые 90 дней",
  "Долгое закрытие вакансий",
  "Субъективная оценка кандидатов",
  "Несовместимость в командах",
  "Отсутствие прозрачности по рискам",
  "Дорогие внешние агентства",
];

const solutions = [
  "AI-прогноз совместимости и рисков ухода",
  "Автоматизация скрининга и приоритизация",
  "Научно валидированные оценки компетенций",
  "Анализ психотипов и командной динамики",
  "Real-time дашборды по всему штату",
  "Внутренний AI-ассистент найма",
];

export const ProblemSolution = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Решаем реальные проблемы HR и руководителей
            </h2>
            <p className="text-lg text-muted-foreground">
              От субъективных решений к научно обоснованной аналитике
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Problems */}
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-6">
                <h3 className="mb-6 text-xl font-semibold flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-destructive" />
                  Типичные проблемы
                </h3>
                <div className="space-y-4">
                  {problems.map((problem, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-destructive flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{problem}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Solutions */}
            <Card className="border-success/20 bg-success/5">
              <CardContent className="p-6">
                <h3 className="mb-6 text-xl font-semibold flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  Как мы решаем
                </h3>
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-success flex-shrink-0" />
                      <p className="text-sm font-medium">{solution}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-2 text-3xl font-bold text-primary">Управляемый найм</div>
                <p className="text-sm text-muted-foreground">
                  Прозрачные критерии отбора и валидация решений
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-2 text-3xl font-bold text-primary">Прогноз рисков</div>
                <p className="text-sm text-muted-foreground">
                  Раннее выявление потенциальных проблем с совместимостью
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-2 text-3xl font-bold text-primary">AI-рекомендации</div>
                <p className="text-sm text-muted-foreground">
                  Подсказки по действиям на основе данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
