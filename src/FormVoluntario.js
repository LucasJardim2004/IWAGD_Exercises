import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

function FormVoluntario() {
    // estado de submissão (mostra a “página” de confirmação)
  const [submitted, setSubmitted] = useState(false);

  // campos
  const [comentario, setComentario] = useState("");
  const [comentarioStatus, setComentarioStatus] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dia, setDia] = useState("");
  const [horario, setHorario] = useState("");
  const [tarefas, setTarefas] = useState("");

  // validação de “palavras proibidas” no comentário (exemplo)
  const forbidden = useMemo(
    () => ["ofensa", "insulto", "spam", "palavrão", "idiota"],
    []
  );

  function normalizar(txt) {
    return txt
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");
  }

  function validarComentarioAgora() {
    const words = normalizar(comentario)
      .split(/[\s.,;:!?()"'«»[\]{}]+/)
      .filter(Boolean);
    const temProibida = words.some((w) => forbidden.includes(w));
    setComentarioStatus(
      temProibida
        ? "⚠️ O comentário contém palavras proibidas."
        : comentario.trim()
        ? "✅ Comentário válido."
        : "ℹ️ Comentário vazio (opcional)."
    );
  }

  const canSubmit =
    nome.trim() &&
    email.trim() &&
    dia.trim() &&
    horario.trim() &&
    // comentário não pode conter proibidas
    !normalizar(comentario)
      .split(/[\s.,;:!?()"'«»[\]{}]+/)
      .filter(Boolean)
      .some((w) => forbidden.includes(w));

  function handleSubmit(e) {
  e.preventDefault();

  if (!canSubmit) {
    if (!comentarioStatus) validarComentarioAgora();
    return;
  }

  // 🧾 Mostrar no console todos os dados do formulário
  console.clear();
  console.log("📋 Dados da candidatura submetida:");
  console.log("Nome:", nome);
  console.log("Email:", email);
  console.log("Telefone:", telefone || "(não indicado)");
  console.log("Dia:", dia);
  console.log("Horário:", horario);
  console.log("Tarefas preferidas:", tarefas || "(não indicado)");
  console.log("Comentário:", comentario || "(vazio)");

  // Mostra também o JSON completo (muito útil)
  console.log("JSON completo:", {
    nome,
    email,
    telefone,
    dia,
    horario,
    tarefas,
    comentario,
  });

  // depois continua como antes
  setSubmitted(true);
}

  function handleReset(e) {
    // como os inputs são controlados, limpamos o estado à mão
    e.preventDefault();
    setComentario("");
    setComentarioStatus("");
    setNome("");
    setEmail("");
    setTelefone("");
    setDia("");
    setHorario("");
    setTarefas("");
  }

  if (submitted) {
    // “página” de confirmação dentro do mesmo componente
    return (
      <main style={styles.page}>
        <article style={styles.card}>
          <h1>Candidatura aceite</h1>
          <p>
            Obrigado{nome ? `, ${nome}` : ""}! A tua candidatura de voluntário
            foi registada para o concerto do Trio de Jazz.
          </p>
          <p style={{ marginTop: "1rem" }}>
            <Link to="/">← Voltar ao início</Link>
          </p>
        </article>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <article style={styles.card}>
        <header>
          <h1>Candidaturas a Voluntário</h1>
          <nav aria-label="Navegação principal" style={styles.nav}>
            <Link to="/">Início</Link>
            <span aria-hidden="true" style={{ opacity: 0.4 }}>
              ·
            </span>
            <Link to="/inscricao" aria-current="page">
              Candidaturas
            </Link>
          </nav>
        </header>

        <section aria-labelledby="instrucoes" style={{ marginTop: "1rem" }}>
          <h2 id="instrucoes">Instruções</h2>
          <p>
            Preencha o formulário abaixo para simular a sua candidatura a
            voluntário. A submissão mostra uma confirmação com a mensagem{" "}
            <q>Candidatura aceite</q>. (Não há base de dados — é uma simulação.)
          </p>
        </section>

        <section aria-labelledby="formulario" style={{ marginTop: "1rem" }}>
          <h2 id="formulario">Formulário</h2>

          <form onSubmit={handleSubmit} noValidate>
            <fieldset style={styles.fs}>
              <legend>Dados do voluntário</legend>

              <fieldset style={styles.fsInner}>
                <legend>Comentário (opcional)</legend>
                <p>
                  <label htmlFor="comentario">Deixe um comentário</label>
                  <br />
                  <input
                    id="comentario"
                    name="comentario"
                    placeholder="Escreva o seu comentário"
                    size={40}
                    type="text"
                    value={comentario}
                    onChange={(e) => {
                      setComentario(e.target.value);
                      setComentarioStatus(""); // limpa status até clicar em validar
                    }}
                  />
                  {" "}
                  <button
                    id="validar-comentario"
                    type="button"
                    onClick={validarComentarioAgora}
                  >
                    Validar comentário
                  </button>
                  <span
                    aria-live="polite"
                    className="status"
                    id="comentario-status"
                    style={styles.status}
                  >
                    {comentarioStatus}
                  </span>
                </p>
              </fieldset>

              <p>
                <label htmlFor="nome">Nome completo</label>
                <br />
                <input
                  id="nome"
                  name="nome"
                  placeholder="O seu nome"
                  required
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </p>

              <p>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  id="email"
                  name="email"
                  placeholder="nome@exemplo.com"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>

              <p>
                <label htmlFor="telefone">Telefone (opcional)</label>
                <br />
                <input
                  id="telefone"
                  inputMode="tel"
                  name="telefone"
                  pattern="[0-9+\s-]{9,}"
                  placeholder="+351 9xx xxx xxx"
                  type="tel"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </p>
            </fieldset>

            <fieldset style={styles.fs}>
              <legend>Disponibilidade</legend>

              <p>
                <label htmlFor="dia">Dia disponível</label>
                <br />
                <input
                  id="dia"
                  list="dias"
                  name="dia"
                  placeholder="Escolha ou escreva um dia"
                  required
                  value={dia}
                  onChange={(e) => setDia(e.target.value)}
                />
                <datalist id="dias">
                  <option value="Véspera (dia -1)"></option>
                  <option value="Dia do concerto (D) — tarde"></option>
                  <option value="Dia do concerto (D) — noite"></option>
                  <option value="Dia seguinte (D+1) — manhã"></option>
                </datalist>
              </p>

              <p>
                <label htmlFor="horario">Horário</label>
                <br />
                <input
                  id="horario"
                  list="horarios"
                  name="horario"
                  placeholder="Escolha ou escreva um horário"
                  required
                  value={horario}
                  onChange={(e) => setHorario(e.target.value)}
                />
                <datalist id="horarios">
                  <option value="15:00–17:00 (montagem)"></option>
                  <option value="17:00–19:00 (passagem de som)"></option>
                  <option value="19:00–21:00 (concerto)"></option>
                  <option value="21:00–22:00 (desmontagem)"></option>
                </datalist>
              </p>

              <p>
                <label htmlFor="tarefas">Tarefas preferidas (opcional)</label>
                <br />
                <textarea
                  cols={40}
                  id="tarefas"
                  name="tarefas"
                  placeholder="Ex.: receção, acompanhamento de músicos, apoio de palco, logística"
                  rows={4}
                  value={tarefas}
                  onChange={(e) => setTarefas(e.target.value)}
                />
              </p>
            </fieldset>

            <p style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <button type="submit" disabled={!canSubmit} aria-disabled={!canSubmit}>
                Submeter candidatura
              </button>
              <button type="reset" onClick={handleReset}>
                Limpar
              </button>
              <Link to="/" style={styles.linkBtn}>
                Voltar ao início
              </Link>
            </p>
          </form>
        </section>

        <footer style={{ marginTop: "1rem", opacity: 0.8, fontSize: "0.95rem" }}>
          © 2025 Trio de Jazz — Site de apoio ao voluntariado.
        </footer>
      </article>
    </main>
  );
}
  /* estilos inline simples para manter tudo contido no componente */
const styles = {
  page: {
    minHeight: "100dvh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "2rem 1rem",
    background: "#fafafa",
  },
  card: {
    width: "100%",
    maxWidth: 720,
    background: "#fff",
    border: "1px solid #eaeaea",
    borderRadius: 12,
    padding: "1.25rem 1.25rem 1.5rem",
    boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
  },
  nav: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    marginTop: "0.25rem",
  },
  fs: {
    border: "1px solid #e6e6e6",
    borderRadius: 10,
    padding: "1rem",
    marginTop: "0.75rem",
  },
  fsInner: {
    border: "1px dashed #e6e6e6",
    borderRadius: 10,
    padding: "0.75rem",
    marginBottom: "0.75rem",
    background: "#fcfcfc",
  },
  status: {
    marginLeft: "0.5rem",
    fontSize: "0.95rem",
  },
  linkBtn: {
    display: "inline-block",
    padding: "0.5rem 0.9rem",
    borderRadius: 6,
    background: "#efefef",
    textDecoration: "none",
    color: "#222",
  },
};

export default FormVoluntario;