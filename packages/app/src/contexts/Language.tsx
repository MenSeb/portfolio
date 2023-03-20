import * as React from 'react';
import * as languages from '../languages';

type Language = keyof typeof languages;

type LanguageToggle = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) => void;

type LanguageState = {
  language: Language;
  toggleLanguage: LanguageToggle;
};

export const defaultLanguage: Language = 'fr';

export const LanguageContext = React.createContext<LanguageState>(
  {} as LanguageState,
);

export function useLanguageContext(): LanguageState {
  return React.useContext(LanguageContext);
}

export function LanguageProvider({
  children,
}: React.PropsWithChildren): JSX.Element {
  const [language, setLanguage] = React.useState<Language>(() => {
    const storageLanguage = localStorage.getItem('language') as Language;

    return storageLanguage ? storageLanguage : defaultLanguage;
  });

  const toggleLanguage = React.useCallback<LanguageToggle>(() => {
    setLanguage((activeLanguage) => (activeLanguage === 'fr' ? 'en' : 'fr'));
  }, []);

  React.useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
