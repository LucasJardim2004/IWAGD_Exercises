import React from 'react';

function About() {
  return (
    <section aria-labelledby="sobre-o-concerto">
      <h2 id="sobre-o-concerto">Sobre o concerto</h2>
      <p>
        O <strong>Trio de Jazz</strong> apresenta-se no Iscte para um
        concerto único, com um repertório que viaja pelo jazz clássico,
        bossa nova e samba-jazz. Junte-se a nós como voluntário para apoiar
        a produção do evento!
      </p>
      <a
        href="https://www.iscte-iul.pt/event/3096/trio-de-jazz-concerto"
        rel="noopener noreferrer"
        target="_blank"
      >
        <figure>
          <img
            alt="Logótipo do Trio de Jazz"
            src="https://media.istockphoto.com/id/184310196/pt/vetorial/trio-de-jazz.jpg?s=612x612&w=0&k=20&c=qME-XqX4BzWqzO0V8feMTxw0AhtE6YG34GjUoPbAxJ8="
          />
          <figcaption>
            Imagem do Trio de Jazz (link para a página do concerto no site
            do Iscte).
          </figcaption>
        </figure>
      </a>
    </section>
  );
}

export default About;
