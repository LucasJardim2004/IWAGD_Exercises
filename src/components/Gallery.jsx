import React from 'react';

function Gallery() {
  return (
      <section aria-labelledby="slideshow-titulo" id="slideshow-section">
        <h2 id="slideshow-titulo">Galeria</h2>
        <div className="slideshow">
          <img
            alt="Foto do concerto 1"
            id="slideshow"
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop&w=1200&auto=format&fit=crop"
          />
        </div>
      </section>
  );
}

export default Gallery;
