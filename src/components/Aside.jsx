import React from 'react';

function Aside() {
  return (
    <aside aria-labelledby="noticias">
      <h2 id="noticias">Notícias</h2>
      <ul>
        <li>Convocatória de voluntários aberta — vagas limitadas.</li>
        <br />
        <li>Ensaios técnicos no dia anterior ao concerto.</li>
        <br />
        <li>Briefing de voluntários uma hora antes do início.</li>
      </ul>
    </aside>
  );
}

export default Aside;
