import React, { useState, useRef, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SurveyContext } from '../../context/SurveyContext'
import musicas from '../../static/musicas.json'
import '../../App.css';

export default function Survey() {
  const { addResponse } = useContext(SurveyContext);
  const location = useLocation();
  const navigate = useNavigate();
  const nameRef = useRef();

  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [timeSlot, setTimeSlot] = useState('noite');
  const [critics, setCritics] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    nameRef.current?.focus();
    try { sessionStorage.setItem('surveyVisited', 'true'); } catch (e) {}
    if (Array.isArray(musicas) && musicas.length > 0) {
      setOptions(musicas);
    } else {
      setOptions([]);
    }
  }, []);

  const toggleOption = (id) => {
    setSelected((prev) => {
      const next = prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id];
      try { sessionStorage.setItem('surveySelections', JSON.stringify(next)); } catch (e) {}
      return next;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected.length === 0) {
      setError('Por favor selecione pelo menos uma música.');
      return;
    }
    setError('');

    const chosenTitles = selected
        .map((id) => options.find((o) => o.id === id))
        .filter(Boolean).map((o) => o.title);

    const response = {
        name: nameRef.current?.value || '',
        songs: chosenTitles,
        timeSlot,
        critics: critics.trim(),
        from: location.pathname,
        createdAt: new Date().toISOString(),
    };

    addResponse(response);

    try {
        const raw = sessionStorage.getItem('surveyResponses');
        const arr = raw ? JSON.parse(raw) : [];
        arr.push(response);
        sessionStorage.setItem('surveyResponses', JSON.stringify(arr));
        sessionStorage.setItem('lastSurveyResponse', JSON.stringify(response));
        sessionStorage.setItem('lastSurveySubmittedAt', new Date().toISOString());
    } catch (e) {}

    setSubmitted(true);
    navigate('/inquerito/resposta', { state: { response } });

    setSelected([]);
    setCritics('');
  };

    const goHome = () => {
        navigate('/');
  };

      const goToAllResults = () => {
          navigate('/inquerito/resultados');
  };

  return (
    <div style={{ padding: '1rem', maxWidth: 700, margin: '0 auto' }}>
      <h2>Inquérito ao Público</h2>

        <div style={{ marginBottom: 12 }}>
            <button
              type="button"
              className="nav-button ghost"
              onClick={goHome}
              aria-label="Voltar à página principal"
            >
              Voltar à página principal
            </button>{' '}
            <button
              type="button"
              className="nav-button"
              onClick={goToAllResults}
              aria-label="Ver resultados de todos os inquéritos"
            >
              Ver todos os resultados
            </button>
      </div>

      {submitted && (
        <div>
          <p>Obrigado pela sua resposta — a sua opinião é importante para nós.</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>

          <div style={{ marginBottom: 12 }}>
            <label>Nome (opcional)</label><br />
            <input ref={nameRef} name="name" type="text" placeholder="Seu nome" style={{ width: '100%' }} />
          </div>

        <fieldset style={{ marginBottom: 12 }}>
          <legend>Quais as músicas preferidas (obrigatório)</legend>
          {options.length === 0 ? (
            <p>No options available.</p>
          ) : (
            options.map((opt) => (
              <div key={opt.id} style={{ marginBottom: 6 }}>
                <label>
                  <input
                    type="checkbox"
                    value={opt.id}
                    checked={selected.includes(opt.id)}
                    onChange={() => toggleOption(opt.id)}
                  />{' '}
                  {opt.title}
                </label>
              </div>
            ))
          )}
          {error && <div style={{ color: 'red', marginTop: 6 }}>{error}</div>}
        </fieldset>


        <div style={{ marginBottom: 12 }}>
          <label>Horário preferido</label><br />
          <label><input type="radio" name="hora" value="18h" checked={timeSlot === '18h'} onChange={() => setTimeSlot('18h')} /> 18h</label>{' '}
          <label><input type="radio" name="hora" value="22h" checked={timeSlot === '22h'} onChange={() => setTimeSlot('22h')} /> 22h</label>{' '}
          <label><input type="radio" name="hora" value="24h" checked={timeSlot === '24h'} onChange={() => setTimeSlot('24h')} /> 24h</label>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Críticas / Sugestões</label><br />
          <textarea
            name="critics"
            value={critics}
            onChange={(e) => setCritics(e.target.value)}
            rows={4}
            style={{ width: '100%' }}
            placeholder="O que não correu bem em espetáculos anteriores? Como podemos melhorar?"
          />
        </div>

        <button type="submit">Enviar Inquérito</button>
      </form>
    </div>
  );
}