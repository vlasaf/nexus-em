import { Card, CardContent } from "@/components/ui/card";
import { Plug, Database, Calendar, Mail, Users, FileSpreadsheet } from "lucide-react";
const integrations = [{
  icon: Users,
  name: "ATS системы",
  description: "HH.ru, Talantix, SmartStaff"
}, {
  icon: Database,
  name: "HRIS",
  description: "SAP, 1C, Битрикс24"
}, {
  icon: Calendar,
  name: "Календари",
  description: "Google Calendar, Outlook"
}, {
  icon: Mail,
  name: "Email",
  description: "Gmail, Outlook, Яндекс"
}, {
  icon: FileSpreadsheet,
  name: "Таблицы",
  description: "Excel, Google Sheets"
}, {
  icon: Plug,
  name: "API",
  description: "REST API для кастомных интеграций"
}];
export const Integrations = () => {
  return <section className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Интеграции с вашими системами
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Работаем через API и импорт данных — минимум ручной работы
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration, index) => <Card key={index} className="group transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <integration.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">{integration.name}</h3>
                    <p className="text-sm text-muted-foreground">{integration.description}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="mt-12 rounded-xl border bg-card p-8 text-center">
            <h3 className="mb-3 text-xl font-semibold">Нет нужной интеграции?</h3>
            <p className="text-muted-foreground mb-4">
              Мы разработаем кастомную интеграцию под ваши системы через REST API
            </p>
            
          </div>
        </div>
      </div>
    </section>;
};