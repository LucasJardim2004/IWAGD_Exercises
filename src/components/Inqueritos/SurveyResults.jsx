import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../App.css';

export default function SurveyResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (location.state && location.state.response) {
      setResponse(location.state.response);
      try { sessionStorage.setItem('lastSurveyResponse', JSON.stringify(location.state.response)); } catch (e) {}
      return;
    }

    try {
      const raw = sessionStorage.getItem('lastSurveyResponse');
      if (raw) setResponse(JSON.parse(raw));
    } catch (e) {
      setResponse(null);
    }
  }, [location.state]);

  if (!response) {
    return (
      <div style={{ padding: '1rem', maxWidth: 700, margin: '0 auto' }}>
        <h2>Respostas do Inquérito</h2>
        <p>Nenhuma resposta encontrada.</p>
        <button className="nav-button ghost" onClick={() => navigate('/')}>Voltar à página principal</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem', maxWidth: 700, margin: '0 auto' }}>
      <h2>Respostas submetida! </h2>

      <section style={{ marginBottom: 12 }}>
        <h3>Músicas de que gostou:</h3>
        {Array.isArray(response.songs) && response.songs.length > 0 ? (
          <ul>
            {response.songs.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        ) : (
          <p>Não foram selecionadas músicas.</p>
        )}
      </section>

      <section style={{ marginBottom: 12 }}>
        <h3>Horário preferido:</h3>
        <p>{response.timeSlot || 'Não indicado'}</p>
      </section>

      <section style={{ marginBottom: 12 }}>
        <h3>Críticas / Sugestões:</h3>
        <p>{response.critics ? response.critics : 'Nenhuma crítica/submissão'}</p>
      </section>

      <div style={{ marginTop: 16 }}>
        <button className="nav-button primary" onClick={() => navigate('/')}>Voltar à página principal</button>
      </div>
    </div>
  );
}