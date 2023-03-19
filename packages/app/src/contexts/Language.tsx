import * as React from 'react';

type Language = 'english' | 'french';

type LanguageToggle = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) => void;

type LanguageState = {
  language: Language;
  toggleLanguage: LanguageToggle;
};

export const LanguageContext = React.createContext<LanguageState>(
  {} as LanguageState,
);

export function useLanguageContext(): LanguageState {
  return React.useContext(LanguageContext);
}

export function LanguageProvider({
  children,
}: React.PropsWithChildren): JSX.Element {
  const [language, setLanguage] = React.useState<Language>('french');

  const toggleLanguage = React.useCallback<LanguageToggle>((event) => {
    event.preventDefault();

    setLanguage((currentLanguage) =>
      currentLanguage === 'french' ? 'english' : 'french',
    );
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
