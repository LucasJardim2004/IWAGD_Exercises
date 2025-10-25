import React, { createContext, useState, useEffect } from 'react';

export const SurveyContext = createContext(undefined);

export function SurveyProvider({ children }) {
  const [responses, setResponses] = useState(() => {
    const raw = localStorage.getItem('surveyResponses');
    try {
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('surveyResponses', JSON.stringify(responses));
  }, [responses]);

  const addResponse = (response) => {
    setResponses(prev => [...prev, response]);
    try {
      sessionStorage.setItem('lastSurveyResponse', JSON.stringify(response));
    } catch {}
  };

  return (
    <SurveyContext.Provider value={{ responses, addResponse }}>
      {children}
    </SurveyContext.Provider>
  );
}