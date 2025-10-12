import React from 'react';
import Musician from '../Musicos/Musicians';
import musicos from '../../static/musicos.json';

function ListMusicians() {
  return (
    <div>
      <h1>Os Músicos do Grupo</h1>
      {musicos.map((m, index) => (
        <Musician
          key={index}
          nome={m.nome}
          imagem={m.imagem}
          instrumentosestilos={m.instrumentosestilos}
          descricao={m.descricao}
          urlvideo={m.urlvideo}
          dataintegracao={m.dataintegracao}
        />
      ))}
    </div>
  );
}

export default ListMusicians;