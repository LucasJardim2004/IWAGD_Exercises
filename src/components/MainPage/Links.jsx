import React from 'react';
import { useNavigate } from 'react-router-dom';

function Links() {
  const navigate = useNavigate();

  return (
<section aria-labelledby="ligacoes-titulo" id="ligacoes">
        <h2 id="ligacoes-titulo">Ligações úteis</h2>
        <ul>
          <li>
            <a
              href="https://www.iscte-iul.pt/event/3096/trio-de-jazz-concerto"
              rel="noopener noreferrer"
              target="_blank"
            >
              Página oficial do concerto
            </a>
          </li>
          <li>
            <a
              href="https://www.bluenote.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Blue Note Records
            </a>
          </li>
          <li>
            <a
              href="https://www.allaboutjazz.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              All About Jazz
            </a>
          </li>
          <li>
            <a
              href="https://www.jazz.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Jazz at Lincoln Center
            </a>
          </li>
        </ul>
        <button
          style={{ marginTop: '1rem', color: 'white', backgroundColor: '#007BFF', padding: '0.5rem 1rem', cursor: 'pointer', border: 'none', borderRadius: '4px' }}
          aria-label="Navegar para o formulário de inscrição"
          onClick={() => navigate('/inscricao')}
        >
          Quero ser voluntário/a
        </button>
      </section>
  );
}

export default Links;
