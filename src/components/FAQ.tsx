import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

export const FAQ = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-muted/30 scroll-mt-20" id="faq">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {t('faq.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('faq.subtitle')}
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {(t('faq.list', { returnObjects: true }) as Array<{ question: string; answer: string }>).map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
