document.addEventListener("DOMContentLoaded", () => {
  const headerFoto = document.getElementById("header-foto");
  if (headerFoto) {
    headerFoto.addEventListener("mouseenter", () => {
      headerFoto.style.transition = "opacity .2s ease";
      headerFoto.style.opacity = "0";
    });
    headerFoto.addEventListener("mouseleave", () => {
      headerFoto.style.opacity = "1";
    });
  }


  const slideshow = document.getElementById("slideshow");
  if (slideshow) {
    const fotos = [
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop"
    ];
    let i = 0;
    setInterval(() => {
      i = (i + 1) % fotos.length;
      slideshow.src = fotos[i];
    }, 3000);
  }


  const btnValidar = document.getElementById("validar-comentario");
  const inpComentario = document.getElementById("comentario");
  const status = document.getElementById("comentario-status");

  const insultos = [
    "abecula","abentesma","achavascado","alimaria","andrajoso",
    "barrega","biltre","cacostomo","cuarra","estolido",
    "estroso","estultiloquio","nefelibata","nescio","pechenga",
    "sevandija","somitico","tatibitate","xexe","cheche","xexelento"
  ];


  const normalize = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  if (btnValidar && inpComentario && status) {
    btnValidar.addEventListener("click", () => {
      const texto = (inpComentario.value || "").trim();
      const norm = normalize(texto);

      const encontrado = insultos.some(palavra => {
        const re = new RegExp(`\\b${palavra}\\b`, "i");
        return re.test(norm);
      });

      if (texto.length === 0) {
        status.textContent = "";
        status.className = "status";
        return;
      }

      if (encontrado) {
        inpComentario.value = "";
        status.textContent = "insulto detetado — comentário limpo";
        status.className = "status err";
        inpComentario.focus();
      } else {
        status.textContent = "comentário aceite";
        status.className = "status ok";
      }
    });
  }
});
