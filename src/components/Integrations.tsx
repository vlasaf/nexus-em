import { Card, CardContent } from "@/components/ui/card";
import { Plug, Database, Calendar, Mail, Users, FileSpreadsheet } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Integrations = () => {
  const { t } = useTranslation();

  const integrations = [
    {
      icon: Users,
      name: t('integrations.list.ats.name'),
      description: t('integrations.list.ats.description')
    },
    {
      icon: Database,
      name: t('integrations.list.hris.name'),
      description: t('integrations.list.hris.description')
    },
    {
      icon: Calendar,
      name: t('integrations.list.calendars.name'),
      description: t('integrations.list.calendars.description')
    },
    {
      icon: Mail,
      name: t('integrations.list.email.name'),
      description: t('integrations.list.email.description')
    },
    {
      icon: FileSpreadsheet,
      name: t('integrations.list.spreadsheets.name'),
      description: t('integrations.list.spreadsheets.description')
    },
    {
      icon: Plug,
      name: t('integrations.list.api.name'),
      description: t('integrations.list.api.description')
    }
  ];

  return (
    <section className="py-24 bg-background scroll-mt-20" id="integrations">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {t('integrations.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('integrations.subtitle')}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration, index) => (
              <Card key={index} className="group transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <integration.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">{integration.name}</h3>
                    <p className="text-sm text-muted-foreground">{integration.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-xl border bg-card p-8 text-center">
            <h3 className="mb-3 text-xl font-semibold">{t('integrations.customTitle')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('integrations.customDescription')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
