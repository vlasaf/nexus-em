import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText, Server, CheckCircle } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Шифрование данных",
    description: "AES-256 шифрование при хранении и TLS 1.3 при передаче",
  },
  {
    icon: Eye,
    title: "Контроль доступа",
    description: "Гранулярные права, SSO, двухфакторная аутентификация",
  },
  {
    icon: FileText,
    title: "Журнал действий",
    description: "Полный audit log всех операций с данными",
  },
  {
    icon: Server,
    title: "Опции размещения",
    description: "Cloud, on-premise или hybrid — выбор региона хранения",
  },
  {
    icon: Shield,
    title: "GDPR compliance",
    description: "Соответствие требованиям защиты персональных данных",
  },
  {
    icon: CheckCircle,
    title: "Регулярные аудиты",
    description: "Пентесты и аудиты безопасности раз в квартал",
  },
];

export const Security = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Безопасность и комплаенс
            </h2>
            <p className="text-lg text-muted-foreground">
              Защита данных на уровне банковских систем
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-success/10 text-success">
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

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card className="border-success/20 bg-success/5">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold flex items-center gap-2">
                  <Shield className="h-5 w-5 text-success" />
                  Сертификации
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    ISO 27001 (в процессе)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    GDPR-совместимость
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    152-ФЗ о персональных данных
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-info/20 bg-info/5">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold flex items-center gap-2">
                  <Server className="h-5 w-5 text-info" />
                  Опции размещения
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-info" />
                    Cloud (AWS, Yandex Cloud)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-info" />
                    On-premise установка
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-info" />
                    Выбор региона хранения
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
