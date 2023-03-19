import * as React from 'react';
import { useLanguageContext } from '../contexts';

export default function Language(): JSX.Element {
  const { language, toggleLanguage } = useLanguageContext();

  return (
    <button
      className="language"
      onClick={toggleLanguage}
      title={`Toggle to ${language} language`}
    >
      <img
        alt="icon language"
        className="language-icon"
        src="../assets/language.svg"
      />
      <span className="language-text">{language}</span>
    </button>
  );
}
