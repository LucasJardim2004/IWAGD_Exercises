import React from 'react';
import { useNavigate } from 'react-router-dom';

function Buttons() {
  const navigate = useNavigate();

  return (
    <section
      aria-labelledby="botoes-titulo"
      id="botoes"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
        <div className="nav-buttons-wrapper" role="group" aria-label="Ações principais">

        <button
          className="nav-button primary"
          onClick={() => navigate('/inscricao')}
          aria-label="Abrir formulário de inscrição de voluntário"
        >Quero ser voluntário/a</button>

        <button className="nav-button secondary"
                onClick={() => navigate('/inquerito')}
                aria-label="Abrir inquérito ao público">Participe no inquérito</button>
             </div>
        </section>
  );
}

export default Buttons;