import React from 'react';

function Contacts() {
  return (
      <section aria-labelledby="contactos-titulo" id="contactos">
        <h2 id="contactos-titulo">Contactos</h2>
        <address>
          Organização do Concerto — Iscte
          <br />
          Email:
          <a href="mailto:concerto.trio.jazz@iscte.pt">
            concerto.trio.jazz@iscte.pt
          </a>
          <br />
          Telefone: <a href="tel:+351210000000">+351 210 000 000</a>
        </address>
      </section>
  );
}

export default Contacts;
