import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Target, TrendingUp, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const personalityData = [
  { name: "Честность", value: 3.57 },
  { name: "Эмоциональность", value: 2.76 },
  { name: "Экстраверсия", value: 3.11 },
  { name: "Доброжелательность", value: 3.44 },
  { name: "Добросовестность", value: 3.86 },
  { name: "Открытость", value: 3.84 },
];

const stabilityData = [
  { name: "Стрессоустойчивость", value: 102 },
  { name: "Достижение", value: 34 },
  { name: "Предотвращение", value: 15 },
  { name: "Индекс фокуса", value: 18.44 },
];

const metrics = [
  { label: "Честность", value: "3.57" },
  { label: "Эмоциональность", value: "2.76" },
  { label: "Экстраверсия", value: "3.11" },
  { label: "Доброжелательность", value: "3.44" },
  { label: "Добросовестность", value: "3.86" },
  { label: "Открытость", value: "3.84" },
];

export const PersonalityCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="hover-lift">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <CardTitle className="text-xl">Черты личности</CardTitle>
          </div>
          <Button variant="ghost" size="icon">
            <Info className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={personalityData}>
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 11 }}
                angle={-15}
                textAnchor="end"
                height={60}
              />
              <YAxis domain={[0, 5]} />
              <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="hover-lift">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-chart-2/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-chart-2" />
            </div>
            <CardTitle className="text-xl">Устойчивость и аффект</CardTitle>
          </div>
          <Button variant="ghost" size="icon">
            <Info className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={stabilityData}>
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 11 }}
                angle={-15}
                textAnchor="end"
                height={60}
              />
              <YAxis />
              <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">102</div>
              <div className="text-sm text-muted-foreground">Стрессоустойчивость</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">34</div>
              <div className="text-sm text-muted-foreground">Достижение</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15</div>
              <div className="text-sm text-muted-foreground">Предотвращение</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">18.44</div>
              <div className="text-sm text-muted-foreground">Индекс фокуса</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
