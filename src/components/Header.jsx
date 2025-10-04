import React, { useState } from 'react';

function Header() {
  const [opacity, setOpacity] = useState(1);

  return (
    <header>
      <img
        alt="Foto do festival de jazz no palco"
        id="header-foto"
        src="https://images.unsplash.com/photo-1499415479124-43c32433a620?q=80&w=1200&auto=format&fit=crop"
        style={{ transition: 'opacity .2s ease', opacity }}
        onMouseEnter={() => setOpacity(0)}
        onMouseLeave={() => setOpacity(1)}
      />
      <h1>Trio de Jazz — Concerto no Iscte</h1>
      <p>Organização de voluntariado para o concerto.</p>
      {/* Navigation here */}
    </header>
  );
}

export default Header;