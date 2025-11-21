import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const candidates = [
  {
    name: "Роман Греков",
    position: "HR",
    overall: 74,
    culture: 83,
    team: 50,
    role: 95,
    personality: ["PaI", "INTJ"],
    potential: 79,
    experience: "4 силы, стророн(ы)",
  },
  {
    name: "София Егорова",
    position: "HR",
    overall: 73,
    culture: 80,
    team: 50,
    role: 95,
    personality: ["aeI", "ENFJ"],
    potential: 80,
    experience: "4 силы, стророн(ы)",
  },
  {
    name: "Андрей Соловьёв",
    position: "Product Manager",
    overall: 70,
    culture: 82,
    team: 50,
    role: 80,
    personality: ["Ai", "ISTJ"],
    potential: 71,
    experience: "1 силы, стророн(ы)",
  },
];

export const CandidateCards = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <User className="w-6 h-6 text-primary" />
            Найм и подбор
          </h2>
          <p className="text-muted-foreground mt-1">Оценка соответствия кандидатов</p>
        </div>
        <Badge variant="secondary" className="text-lg px-4 py-2">
          6 кандидатов
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidates.map((candidate, index) => (
          <Card key={index} className="hover-lift">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{candidate.name}</h3>
                    <p className="text-sm text-muted-foreground">{candidate.position}</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${
                    candidate.overall >= 74 ? "text-success" : 
                    candidate.overall >= 70 ? "text-chart-4" : "text-chart-3"
                  }`}>
                    {candidate.overall}
                  </div>
                  <div className="text-xs text-muted-foreground">Overall</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-success">{candidate.culture}</div>
                  <div className="text-xs text-muted-foreground">Культура</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-chart-4">{candidate.team}</div>
                  <div className="text-xs text-muted-foreground">Команда</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-success">{candidate.role}</div>
                  <div className="text-xs text-muted-foreground">Роль</div>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                {candidate.personality.map((type, i) => (
                  <Badge key={i} variant="outline">{type}</Badge>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm mb-4">
                <span className="text-muted-foreground">⚡ Лидерский потенциал</span>
                <span className="font-semibold">{candidate.potential}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-success mb-4">
                <CheckCircle2 className="w-4 h-4" />
                <span>{candidate.experience}</span>
              </div>

              <Button variant="outline" className="w-full">
                Подробнее
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
