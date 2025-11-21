import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const suggestedQuestions = [
  { icon: "📊", label: "Общая оценка компании" },
  { icon: "⚠️", label: "Риски выгорания" },
  { icon: "👥", label: "Командная динамика" },
  { icon: "⚡", label: "Лидерский потенциал" },
];

export const AICopilot = () => {
  return (
    <Card className="hover-lift">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary" />
          </div>
          <div>
            <CardTitle>AI Copilot</CardTitle>
            <p className="text-sm text-muted-foreground">Анализ психопрофилей на основе 18 сотрудников</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-muted/50 rounded-lg p-4 border border-border">
          <div className="flex items-start gap-3">
            <Bot className="w-5 h-5 text-primary mt-1" />
            <p className="text-sm">
              Здравствуйте! Я AI Copilot для анализа психопрофилей сотрудников. У меня есть доступ ко всем данным психометрических тестов компании. Чем могу помочь?
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Популярные вопросы:</p>
          <div className="grid grid-cols-2 gap-2">
            {suggestedQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start h-auto py-3 px-4"
              >
                <span className="mr-2">{question.icon}</span>
                <span className="text-sm">{question.label}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <Input
            placeholder="Задайте вопрос о психопрофилях сотрудников..."
            className="flex-1"
          />
          <Button size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
