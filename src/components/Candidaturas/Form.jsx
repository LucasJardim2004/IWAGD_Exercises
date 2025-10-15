import React from 'react';

function Form() {
  return (
<section aria-labelledby="formulario">
          <h2 id="formulario">Formulário</h2>
          <form action="candidatura-aceite.html" method="get">
            <fieldset>
              <legend>Dados do voluntário</legend>

              <fieldset>
                <legend>Comentário (opcional)</legend>
                <p>
                  <label htmlFor="comentario">Deixe um comentário</label><br />
                  <input
                    id="comentario"
                    name="comentario"
                    placeholder="Escreva o seu comentário"
                    size="40"
                    type="text"
                  />
                  <button id="validar-comentario" type="button">
                    Validar comentário
                  </button>
                  <span
                    aria-live="polite"
                    className="status"
                    id="comentario-status"
                  ></span>
                </p>
              </fieldset>
              <p>
                <label htmlFor="nome">Nome completo</label><br />
                <input
                  id="nome"
                  name="nome"
                  placeholder="O seu nome"
                  required=""
                  type="text"
                />
              </p>
              <p>
                <label htmlFor="email">Email</label><br />
                <input
                  id="email"
                  name="email"
                  placeholder="nome@exemplo.com"
                  required=""
                  type="email"
                />
              </p>
              <p>
                <label htmlFor="telefone">Telefone (opcional)</label><br />
                <input
                  id="telefone"
                  inputMode="tel"
                  name="telefone"
                  pattern="[0-9+\s-]{9,}"
                  placeholder="+351 9xx xxx xxx"
                  type="tel"
                />
              </p>
            </fieldset>
            <fieldset>
              <legend>Disponibilidade</legend>
              <p>
                <label htmlFor="dia">Dia disponível</label><br />
                <input
                  id="dia"
                  list="dias"
                  name="dia"
                  placeholder="Escolha ou escreva um dia"
                  required=""
                />
                <datalist id="dias">
                  <option value="Véspera (dia -1)"></option>
                  <option value="Dia do concerto (D) — tarde"></option>
                  <option value="Dia do concerto (D) — noite"></option>
                  <option value="Dia seguinte (D+1) — manhã"></option>
                </datalist>
              </p>
              <p>
                <label htmlFor="horario">Horário</label><br />
                <input
                  id="horario"
                  list="horarios"
                  name="horario"
                  placeholder="Escolha ou escreva um horário"
                  required=""
                />
                <datalist id="horarios">
                  <option value="15:00–17:00 (montagem)"></option>
                  <option value="17:00–19:00 (passagem de som)"></option>
                  <option value="19:00–21:00 (concerto)"></option>
                  <option value="21:00–22:00 (desmontagem)"></option>
                </datalist>
              </p>
              <p>
                <label htmlFor="tarefas">Tarefas preferidas (opcional)</label><br />
                <textarea
                  cols="40"
                  id="tarefas"
                  name="tarefas"
                  placeholder="Ex.: receção, acompanhamento de músicos, apoio de palco, logística"
                  rows="4"
                ></textarea>
              </p>
            </fieldset>
            <p>
              <button type="submit">Submeter candidatura</button>
              <button type="reset">Limpar</button>
            </p>
          </form>
        </section>
  );
}

export default Form;
