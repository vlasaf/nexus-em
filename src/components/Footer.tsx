import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold">Nexus</h3>
            <p className="text-sm text-muted-foreground">
              {t('footer.description')}
            </p>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
            <p>© {currentYear} Nexus. {t('footer.rights')}</p>
            
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                {t('footer.terms')}
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                {t('footer.cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
