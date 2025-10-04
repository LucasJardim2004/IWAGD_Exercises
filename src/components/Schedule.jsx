import React from 'react';

function Schedule() {
  return (
    <section aria-labelledby="horario-titulo" id="horario">
        <h2 id="horario-titulo">Horário das músicas</h2>
        <table>
          <caption>
            Repertório previsto (sujeito a alterações)
          </caption>
          <thead>
            <tr>
              <th scope="col">Hora</th>
              <th scope="col">Música</th>
              <th scope="col">Estilo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>19:00</td>
              <td>Autumn Leaves</td>
              <td>Jazz</td>
            </tr>
            <tr>
              <td>19:15</td>
              <td>Desafinado</td>
              <td>Bossa Nova</td>
            </tr>
            <tr>
              <td>19:30</td>
              <td>Blue Bossa</td>
              <td>Bossa Nova / Jazz</td>
            </tr>
            <tr>
              <td>19:45</td>
              <td>So What</td>
              <td>Modal Jazz</td>
            </tr>
            <tr>
              <td>20:00</td>
              <td>Wave</td>
              <td>Bossa Nova</td>
            </tr>
          </tbody>
        </table>
      </section>
  );
}

export default Schedule;
