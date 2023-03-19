import * as React from 'react';

type Language = {
  code: string;
  value: string;
};

type LanguageToggle = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) => void;

type LanguageState = {
  active: Language;
  inactive: Language;
};

type LanguageValue = {
  language: LanguageState;
  toggleLanguage: LanguageToggle;
};

export const languages = [
  { code: 'fr', value: 'french' },
  { code: 'en', value: 'english' },
];

export const LanguageContext = React.createContext<LanguageValue>(
  {} as LanguageValue,
);

export function useLanguageContext(): LanguageValue {
  return React.useContext(LanguageContext);
}

export function LanguageProvider({
  children,
}: React.PropsWithChildren): JSX.Element {
  const [language, setLanguage] = React.useState<LanguageState>({
    active: languages[0],
    inactive: languages[1],
  });

  const toggleLanguage = React.useCallback<LanguageToggle>(() => {
    setLanguage(({ active, inactive }) => {
      return { active: inactive, inactive: active };
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
