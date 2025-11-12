import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, FileCheck, Award } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "GDPR-friendly",
    description: "Соответствие требованиям защиты данных",
  },
  {
    icon: Lock,
    title: "Безопасность данных",
    description: "Шифрование и контроль доступа",
  },
  {
    icon: FileCheck,
    title: "Научная валидация",
    description: "Метод основан на проверенных метаанализах",
  },
  {
    icon: Award,
    title: "Проверено бизнесом",
    description: "Используют компании 100-500 сотрудников",
  },
];

const metrics = [
  { value: "-20%", label: "Time-to-fill" },
  { value: "-30%", label: "Ранняя текучесть" },
  { value: "-40%", label: "Время скрининга" },
];

export const SocialProof = () => {
  return (
    <section className="py-16 bg-background border-y">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Доверие и результаты
            </p>
          </div>

          {/* Metrics */}
          <div className="mb-12 grid grid-cols-3 gap-4 md:gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">{metric.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {badges.map((badge, index) => (
              <Card key={index} className="border-muted">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <badge.icon className="h-5 w-5" />
                  </div>
                  <div className="text-sm font-semibold mb-1">{badge.title}</div>
                  <div className="text-xs text-muted-foreground">{badge.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
