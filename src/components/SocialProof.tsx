import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, FileCheck, Award } from "lucide-react";

const badges = [
  {
    icon: FileCheck,
    title: "Научная валидация",
    description: "Метод основан на проверенных метаанализах",
  },
  {
    icon: Shield,
    title: "Безопасность и GDPR",
    description: "Шифрование, контроль доступа и соответствие требованиям защиты данных",
  },
  {
    icon: Award,
    title: "Проверено бизнесом",
    description: "Используют компании 20-500 сотрудников",
  },
  {
    icon: Lock,
    title: "Быстрое внедрение",
    description: "Готов к использованию за 1 день без IT-отдела",
  },
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
