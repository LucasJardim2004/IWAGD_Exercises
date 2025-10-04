import React from 'react';

function Links() {
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
      </section>
  );
}

export default Links;
