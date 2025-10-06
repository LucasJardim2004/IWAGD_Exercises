import React from 'react';

function Musician({ nome, imagem, instrumentosestilos, descricao }) {
  return (
    <div>
      <p><strong>Nome:</strong> {nome}</p>
      <img src={imagem} alt={nome} style={{ width: '200px' }} />
      <p><strong>Instrumentos/Estilos:</strong> {instrumentosestilos}</p>
      <p>{descricao}</p>
    </div>
  );
}

export default Musician;