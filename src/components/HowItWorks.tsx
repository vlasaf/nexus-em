import { Card, CardContent } from "@/components/ui/card";
import { Database, Zap, BarChart3, Lightbulb } from "lucide-react";
const steps = [{
  icon: Database,
  title: "Психопрофилирование",
  description: "Оценка личности каждого человека на основе нашей высоковалидированной методологии, подтвержденной метаанализами экспериментальной психологии: тип характера, мотивация, стиль работы, коммуникации",
  color: "text-chart-1",
  bgColor: "bg-chart-1/10"
}, {
  icon: Zap,
  title: "Интеграции",
  description: "Подключаем все ресурсы, где вы ведете учет людей: ATS, HRIS, календари. Вся информация о каждом человеке в компании и при найме попадает в контекст AI, улучшая качество его анализа и рекомендаций. Данные обновляются автоматически в реальном времени",
  color: "text-chart-2",
  bgColor: "bg-chart-2/10"
}, {
  icon: BarChart3,
  title: "AI-анализ совместимости",
  description: "AI сравнивает психопрофили для прогноза командной динамики, конфликтов и эффективности взаимодействия",
  color: "text-chart-3",
  bgColor: "bg-chart-3/10"
}, {
  icon: Lightbulb,
  title: "AI-расшифровка и рекомендации",
  description: "AI расшифровывает психопрофиль и генерирует персональные рекомендации по работе с каждым человеком: как мотивировать, общаться, делегировать задачи",
  color: "text-chart-4",
  bgColor: "bg-chart-4/10"
}];
export const HowItWorks = () => {
  return <section className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Процесс внедрения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Простой процесс внедрения — от оцифровки до AI-рекомендаций
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-6 top-12 hidden h-[calc(100%-96px)] w-0.5 bg-gradient-to-b from-chart-1 via-chart-2 via-chart-3 to-chart-4 lg:block" />

            <div className="space-y-8">
              {steps.map((step, index) => <Card key={index} className="relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${step.bgColor} ${step.color}`}>
                        <step.icon className="h-6 w-6" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-3">
                          <span className="text-sm font-bold text-muted-foreground">ШАГ {index + 1}</span>
                          <div className="h-px flex-1 bg-border" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          <div className="mt-12 rounded-xl border bg-card p-8 text-center">
            <p className="text-lg font-medium mb-4">
              Полное внедрение занимает 2-4 недели. Первые результаты видны через месяц.
            </p>
            <p className="text-sm text-muted-foreground">
              Минимальная настройка с вашей стороны — мы берем основную работу на себя
            </p>
          </div>
        </div>
      </div>
    </section>;
};