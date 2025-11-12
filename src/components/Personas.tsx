import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users2 } from "lucide-react";

const personas = [
  {
    icon: Briefcase,
    name: "CEO / Сооснователь",
    company: "50-400 сотрудников",
    pains: [
      "Рост без раздувания затрат на персонал",
      "Непрогнозируемая текучесть ключевых людей",
      "Ошибки найма стоят дорого (3× зарплаты)",
    ],
    kpis: [
      "EBITDA/выручка на сотрудника",
      "Текучесть в первые 90 дней",
      "Скорость масштабирования команд",
    ],
    value: [
      "Прозрачные дашборды по состоянию штата",
      "Прогноз рисков и быстрые решения",
      "Управляемый найм без субъективизма",
    ],
  },
  {
    icon: Users2,
    name: "HRD / HRBP",
    company: "100-500 сотрудников",
    pains: [
      "Долгое закрытие вакансий (TTF >30 дней)",
      "Субъективность в оценке кандидатов",
      "Конфликты в командах из-за несовместимости",
    ],
    kpis: [
      "Time-to-fill и quality of hire",
      "Удержание high potentials",
      "Эффективность онбординга",
    ],
    value: [
      "AI-помощь в выборе лучшего кандидата",
      "Научно валидированные оценки",
      "Инструменты для формирования команд",
    ],
  },
];

export const Personas = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Для кого этот продукт
            </h2>
            <p className="text-lg text-muted-foreground">
              Решаем задачи руководителей и HR-профессионалов
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {personas.map((persona, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <persona.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">{persona.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{persona.company}</p>
                </CardHeader>
                
                <CardContent className="space-y-6 p-6">
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Боли и задачи
                    </h3>
                    <ul className="space-y-2">
                      {persona.pains.map((pain, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive flex-shrink-0" />
                          <span>{pain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Ключевые KPI
                    </h3>
                    <ul className="space-y-2">
                      {persona.kpis.map((kpi, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-info flex-shrink-0" />
                          <span className="font-medium">{kpi}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Что получает
                    </h3>
                    <ul className="space-y-2">
                      {persona.value.map((val, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-success flex-shrink-0" />
                          <span className="font-medium text-success">{val}</span>
                        </li>
                      ))}
                    </ul>
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
