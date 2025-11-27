import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Download, HelpCircle, TrendingUp } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
interface CalculatorInputs {
  staff: number;
  vacanciesPerMonth: number;
  monthlySalaryCost: number;
  externalRecruitmentCost: number;
  internalRecruitmentCost: number;
  recruiterHours: number;
  recruiterRate: number;
  managerHours: number;
  managerRate: number;
  earlyTurnover: number;
  timeToFill: number;
  daysInMonth: number;
}
const defaultInputs: CalculatorInputs = {
  staff: 300,
  vacanciesPerMonth: 5,
  monthlySalaryCost: 250000,
  externalRecruitmentCost: 60000,
  internalRecruitmentCost: 55000,
  recruiterHours: 25,
  recruiterRate: 1000,
  managerHours: 10,
  managerRate: 3000,
  earlyTurnover: 6,
  timeToFill: 30,
  daysInMonth: 30
};

// Вынесенный компонент поля ввода, чтобы избежать потери фокуса при перерендерах
const InputField = ({
  label,
  field,
  tooltip,
  suffix,
  value,
  onChange,
  min = 0,
  max = 1000000,
}: {
  label: string;
  field: keyof CalculatorInputs;
  value: number;
  onChange: (value: string) => void;
  tooltip?: string;
  suffix?: string;
  min?: number;
  max?: number;
}) => (
  <div className="space-y-2">
    <div className="flex items-center gap-1.5">
      <Label htmlFor={field} className="text-xs font-medium">{label}</Label>
      {tooltip && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
    <div className="relative">
      <Input
        id={field}
        type="number"
        inputMode="decimal"
        step="any"
        value={value === 0 ? '' : value}
        onChange={(e) => onChange(e.target.value)}
        className="pr-12"
        min={min}
        max={max}
      />
      {suffix && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
          {suffix}
        </span>
      )}
    </div>
    <Slider
      value={[value]}
      onValueChange={(values) => onChange(values[0].toString())}
      min={min}
      max={max}
      step={max > 10000 ? 1000 : max > 1000 ? 100 : max > 100 ? 10 : 1}
      className="w-full"
    />
  </div>
);

export const ROICalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>(defaultInputs);
  const [results, setResults] = useState({
    screeningTime: 0,
    externalCosts: 0,
    turnoverReduction: 0,
    ttfReduction: 0,
    total: 0,
    month1: 0,
    month3: 0,
    month6: 0
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      calculateROI();
    }, 500);
    return () => clearTimeout(timer);
  }, [inputs]);
  const calculateROI = () => {
    const {
      vacanciesPerMonth: H,
      monthlySalaryCost: S,
      recruiterHours,
      recruiterRate,
      managerHours,
      managerRate,
      externalRecruitmentCost,
      earlyTurnover,
      timeToFill: TTF,
      daysInMonth: d
    } = inputs;
    const misHire = 3 * S;

    // 1. Screening time savings
    const screeningTime = (recruiterHours * recruiterRate + managerHours * managerRate) * H * 0.4;

    // 2. External costs reduction
    const externalCosts = externalRecruitmentCost * H * 0.2;

    // 3. Early turnover reduction
    const turnoverReduction = H * (earlyTurnover / 100) * misHire * 0.3;

    // 4. Time-to-fill reduction
    const ttfReduction = H * (S / d) * TTF * 0.2;
    const total = screeningTime + externalCosts + turnoverReduction + ttfReduction;

    // Ramp-up effect
    const month1 = total * 0.5;
    const month3 = total * 2.5;
    const month6 = total * 5.5;
    setResults({
      screeningTime,
      externalCosts,
      turnoverReduction,
      ttfReduction,
      total,
      month1,
      month3,
      month6
    });
  };
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(value);
  };
  const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
    // Разрешаем пустую строку для удобного редактирования
    if (value === '') {
      setInputs(prev => ({
        ...prev,
        [field]: 0
      }));
      return;
    }
    
    const numValue = parseFloat(value);
    // Обновляем только если это валидное число
    if (!isNaN(numValue) && numValue >= 0) {
      setInputs(prev => ({
        ...prev,
        [field]: numValue
      }));
    }
  };
  return <section id="calculator" className="py-24 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Рассчитайте экономию для вашей компании
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Узнайте, сколько вы сможете сэкономить через 1, 3 и 6 месяцев использования
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Inputs */}
            <Card className="transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle>Параметры компании</CardTitle>
                <CardDescription>Введите данные вашей компании для точного расчета</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase">Основные показатели</h3>
                  <InputField label="Численность штата" field="staff" suffix="чел" value={inputs.staff} onChange={(v) => handleInputChange('staff', v)} min={10} max={5000} />
                  <InputField label="Вакансий в месяц" field="vacanciesPerMonth" suffix="шт" value={inputs.vacanciesPerMonth} onChange={(v) => handleInputChange('vacanciesPerMonth', v)} min={1} max={100} />
                  <InputField label="Полная стоимость сотрудника" field="monthlySalaryCost" suffix="₽/мес" tooltip="Зарплата + налоги + накладные расходы" value={inputs.monthlySalaryCost} onChange={(v) => handleInputChange('monthlySalaryCost', v)} min={10000} max={1000000} />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase">Затраты на найм</h3>
                  <InputField label="Внешнее закрытие вакансии" field="externalRecruitmentCost" suffix="₽" value={inputs.externalRecruitmentCost} onChange={(v) => handleInputChange('externalRecruitmentCost', v)} min={5000} max={500000} />
                  <InputField label="Часов рекрутера на закрытие" field="recruiterHours" suffix="ч" value={inputs.recruiterHours} onChange={(v) => handleInputChange('recruiterHours', v)} min={1} max={100} />
                  <InputField label="Ставка рекрутера" field="recruiterRate" suffix="₽/ч" value={inputs.recruiterRate} onChange={(v) => handleInputChange('recruiterRate', v)} min={100} max={10000} />
                  <InputField label="Часов менеджера на закрытие" field="managerHours" suffix="ч" value={inputs.managerHours} onChange={(v) => handleInputChange('managerHours', v)} min={1} max={100} />
                  <InputField label="Ставка менеджера" field="managerRate" suffix="₽/ч" value={inputs.managerRate} onChange={(v) => handleInputChange('managerRate', v)} min={100} max={20000} />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase">Метрики эффективности</h3>
                  <InputField label="Ранняя текучесть (90 дней)" field="earlyTurnover" suffix="%" tooltip="Процент сотрудников, уходящих в первые 90 дней" value={inputs.earlyTurnover} onChange={(v) => handleInputChange('earlyTurnover', v)} min={0} max={100} />
                  <InputField label="Среднее время закрытия (TTF)" field="timeToFill" suffix="дн" tooltip="Среднее количество дней от публикации до закрытия вакансии" value={inputs.timeToFill} onChange={(v) => handleInputChange('timeToFill', v)} min={1} max={120} />
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Ваша экономия
                  </CardTitle>
                  <CardDescription>Прогноз снижения затрат по периодам</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="month6" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="month1">1 месяц</TabsTrigger>
                      <TabsTrigger value="month3">3 месяца</TabsTrigger>
                      <TabsTrigger value="month6">6 месяцев</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="month1" className="mt-4 space-y-3">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">{formatCurrency(results.month1)}</div>
                        <p className="mt-1 text-xs text-muted-foreground">Экономия в первый месяц (разгон 50%)</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="month3" className="mt-4 space-y-3">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">{formatCurrency(results.month3)}</div>
                        <p className="mt-1 text-xs text-muted-foreground">Накопленная экономия за 3 месяца</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="month6" className="mt-4 space-y-3">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">{formatCurrency(results.month6)}</div>
                        <p className="mt-1 text-xs text-muted-foreground">Накопленная экономия за 6 месяцев</p>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Ежемесячная экономия</span>
                      <span className="font-semibold">{formatCurrency(results.total)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle>Источники экономии</CardTitle>
                  <CardDescription>Разбивка по направлениям эффекта</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Время скрининга (-40%)</span>
                      <span className="font-semibold text-primary">{formatCurrency(results.screeningTime)}</span>
                    </div>
                    <Progress value={results.screeningTime / results.total * 100} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Внешние затраты (-20%)</span>
                      <span className="font-semibold text-primary">{formatCurrency(results.externalCosts)}</span>
                    </div>
                    <Progress value={results.externalCosts / results.total * 100} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Ранняя текучесть (-30%)</span>
                      <span className="font-semibold text-primary">{formatCurrency(results.turnoverReduction)}</span>
                    </div>
                    <Progress value={results.turnoverReduction / results.total * 100} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Время закрытия вакансии (-20%)</span>
                      <span className="font-semibold text-primary">{formatCurrency(results.ttfReduction)}</span>
                    </div>
                    <Progress value={results.ttfReduction / results.total * 100} className="h-2" />
                  </div>

                  <Button className="w-full mt-2" size="default">
                    <Download className="mr-2 h-4 w-4" />
                    Получить расчет на почту
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};