import React, { useEffect, useState } from 'react';

const fotos = [
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop"
];

function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % fotos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
      <section aria-labelledby="slideshow-titulo" id="slideshow-section">
        <h2 id="slideshow-titulo">Galeria</h2>
        <div className="slideshow">
            <img id="slideshow" src={fotos[index]} alt="Slideshow" />
        </div>
      </section>
  );
}

export default Gallery;
