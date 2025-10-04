import React from 'react';

function Header() {
  return (
    <header>
      <img
        alt="Foto do festival de jazz no palco"
        id="header-foto"
        src="https://images.unsplash.com/photo-1499415479124-43c32433a620?q=80&w=1200&auto=format&fit=crop"
      />
      <h1>Trio de Jazz — Concerto no Iscte</h1>
      <p>Organização de voluntariado para o concerto.</p>

      <nav aria-label="Navegação principal">
        <ul className="menu">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#candidaturas">Candidaturas</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
