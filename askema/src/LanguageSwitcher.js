import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';  // Make sure to import your i18n configuration

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  const buttonStyle = {
    margin: '0',
    padding: '0.5em 1em',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRadius: '5px',
  };

  const containerStyle = {
    position: 'absolute',
    top: '1.3em',
    right: '6em',
    padding: '0.5em',
  };

  return (
    <div style={containerStyle}>
      {currentLanguage === 'en' ? (
        <button style={buttonStyle} onClick={() => changeLanguage('am')}>አማ</button>
      ) : (
        <button style={buttonStyle} onClick={() => changeLanguage('en')}>En</button>
      )}
    </div>
  );
};

export default LanguageSwitcher;