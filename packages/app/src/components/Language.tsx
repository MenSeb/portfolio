import * as React from 'react';
import { useLanguageContext } from '../contexts';

export default function Language(): JSX.Element {
  const { language, toggleLanguage } = useLanguageContext();

  return (
    <button
      aria-label={`Toggle to language ${language}`}
      className="language"
      onClick={toggleLanguage}
      title={`Toggle to language ${language}`}
    >
      <img
        aria-hidden="true"
        alt="icon language"
        className="language-icon"
        src="../assets/language.svg"
      />
      <span aria-hidden="true" className="language-text">
        {language === 'fr' ? 'en' : 'fr'}
      </span>
    </button>
  );
}
