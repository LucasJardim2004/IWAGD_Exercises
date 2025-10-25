import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SurveyContext } from '../../context/SurveyContext';
import '../../App.css';

export default function SurveyAllResults() {
  const navigate = useNavigate();
  const context = useContext(SurveyContext);
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    if (context && Array.isArray(context.responses) && context.responses.length > 0) {
      setResponses(context.responses);
      return;
    }
    try {
      const raw = sessionStorage.getItem('surveyResponses');
      if (raw) setResponses(JSON.parse(raw));
    } catch (e) {
      setResponses([]);
    }
  }, [context]);

  // compute song counts and timeslot counts and collect critiques
  const songCounts = {};
  const timeCounts = {};
  const critiques = [];

  responses.forEach((r) => {
    if (Array.isArray(r.songs)) {
      r.songs.forEach((s) => {
        if (!s) return;
        songCounts[s] = (songCounts[s] || 0) + 1;
      });
    }
    const t = r.timeSlot || 'Não indicado';
    timeCounts[t] = (timeCounts[t] || 0) + 1;
    if (r.critics && r.critics.trim()) {
      critiques.push(r.critics.trim());
    }
  });

  const songsSorted = Object.entries(songCounts).sort((a, b) => b[1] - a[1]);
  const timesSorted = Object.entries(timeCounts).sort((a, b) => b[1] - a[1]);

  return (
    <div style={{ padding: '1rem', maxWidth: 800, margin: '0 auto' }}>
      <h2>Resultados dos Inquéritos</h2>

      <section style={{ marginBottom: 16 }}>
        <h3>Músicas (número de preferências)</h3>
        {songsSorted.length === 0 ? (
          <p>Sem dados de músicas.</p>
        ) : (
          <ul>
            {songsSorted.map(([title, count]) => (
              <li key={title}>{title} — {count} {count === 1 ? 'vez' : 'vezes'}</li>
            ))}
          </ul>
        )}
      </section>

      <section style={{ marginBottom: 16 }}>
        <h3>Horários (número de preferências)</h3>
        {timesSorted.length === 0 ? (
          <p>Sem dados de horários.</p>
        ) : (
          <ul>
            {timesSorted.map(([slot, count]) => (
              <li key={slot}>{slot} — {count} {count === 1 ? 'vez' : 'vezes'}</li>
            ))}
          </ul>
        )}
      </section>

      <section style={{ marginBottom: 16 }}>
        <h3>Críticas submetidas</h3>
        {critiques.length === 0 ? (
          <p>Sem críticas submetidas.</p>
        ) : (
          <ul>
            {critiques.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        )}
      </section>

      <div style={{ marginTop: 12 }}>
        <button className="nav-button ghost" onClick={() => navigate('/')}>Voltar à página principal</button>{' '}
        <button className="nav-button" onClick={() => navigate(-1)}>Voltar</button>
      </div>
    </div>
  );
}