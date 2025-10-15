import React, { useState } from 'react';

function Footer() {
  const [showAuthors, setShowAuthors] = useState(false);

  const year = new Date().getFullYear();

  const footerBase = `© ${year} - Todos os direitos reservados`;
  const footerAutores = 'Autores: Alexandre Venâncio, Lucas Jardim e Pedro Tomé';

  return (
    <footer
      className="footer"
      onClick={() => setShowAuthors(v => !v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setShowAuthors(v => !v)}
      title="Clique para alternar entre o footer normal e os autores"
      style={{ userSelect: 'none', cursor: 'pointer' }}
    >
      {showAuthors ? footerAutores : footerBase}
    </footer>
  );
}

export default Footer;
