import React, { useEffect } from 'react';

const TranslationPage = () => {
  useEffect(() => {

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en', // Set the page's default language
          autoDisplay: false, // Disable automatic translation display
        },
        'google_translate_element'
      );
    };
  }, []);


  return (
    <div>
      <div id="google_translate_element" style={{width:'120px'}}/> {/* Translation container element */}
    </div>
  );
};

export default TranslationPage;