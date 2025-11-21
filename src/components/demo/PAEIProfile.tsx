import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";

const paeiData = [
  { axis: "P (Производство)", value: 0.71 },
  { axis: "A (Администрирование)", value: 0.71 },
  { axis: "E (Предпринимательство)", value: 0.49 },
  { axis: "I (Интеграция)", value: 0.58 },
];

export const PAEIProfile = () => {
  return (
    <Card className="hover-lift">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">Средний профиль компании (PAEI)</CardTitle>
        <Button variant="ghost" size="icon">
          <Info className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={paeiData}>
            <PolarGrid stroke="hsl(var(--border))" />
            <PolarAngleAxis 
              dataKey="axis" 
              tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
            />
            <Radar
              name="PAEI"
              dataKey="value"
              stroke="hsl(var(--primary))"
              fill="hsl(var(--primary))"
              fillOpacity={0.3}
            />
          </RadarChart>
        </ResponsiveContainer>
        
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">0.71</div>
            <div className="text-sm text-muted-foreground">P (Произв.)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">0.71</div>
            <div className="text-sm text-muted-foreground">A (Админ.)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">0.49</div>
            <div className="text-sm text-muted-foreground">E (Предпр.)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">0.58</div>
            <div className="text-sm text-muted-foreground">I (Интегр.)</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
