import React, { useState } from 'react';

function Musician({ nome, imagem, instrumentosestilos, descricao, urlvideo, dataintegracao }) {
  const [mostrarVideo, setMostrarVideo] = useState(false);

  const handleToggleVideo = () => {
    if (urlvideo) setMostrarVideo(prev => !prev);
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <p><strong>Nome:</strong> {nome}</p>

      <img
        src={imagem}
        alt={nome}
        style={{ width: '200px', cursor: urlvideo ? 'pointer' : 'default', display: 'block' }}
        onClick={handleToggleVideo}
        loading="lazy"
        title={urlvideo ? 'Clique para mostrar/ocultar o vídeo' : undefined}
      />

      <p><strong>Instrumentos/Estilos:</strong> {instrumentosestilos}</p>
      <p>{descricao}</p>

      {dataintegracao && (
        <p><em>Integração no grupo:</em> {new Date(dataintegracao).toLocaleDateString()}</p>
      )}

      {mostrarVideo && urlvideo && (
        <div style={{ marginTop: '1rem' }}>
          <iframe
            width="560"
            height="315"
            src={urlvideo}
            title={`Vídeo de ${nome}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}

export default Musician;