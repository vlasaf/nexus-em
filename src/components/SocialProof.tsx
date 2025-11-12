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
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Доверие и результаты
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Научно обоснованное решение для современного HR
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {badges.map((badge, index) => (
              <Card 
                key={index} 
                className="border-muted/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:scale-110 transition-transform duration-300">
                    <badge.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{badge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
