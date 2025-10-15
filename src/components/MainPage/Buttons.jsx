import React from 'react';
import { useNavigate } from 'react-router-dom';

function Buttons() {
  const navigate = useNavigate();

  return (
    <section
      aria-labelledby="botoes-titulo"
      id="botoes"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // 👈 centra horizontalmente
        marginTop: '2rem',
      }}
    >

      <button
        onClick={() => navigate('/inscricao')}
        aria-label="Abrir formulário de inscrição de voluntário"
        style={{
          marginTop: '1rem',
          backgroundColor: '#d9534f', // vermelho
          color: 'white',
          padding: '0.6rem 1.5rem',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '1rem',
          transition: 'background-color 0.2s ease-in-out',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#b52b27')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#d9534f')}
      >
        Quero ser voluntário/a
      </button>
    </section>
  );
}

export default Buttons;