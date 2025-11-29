import React, { useState } from "react";
import styles from "./OpcaoNovaOuUsada.module.scss";

export default function OpcaoNovaOuUsada({
  dadosProdutos,
  setFiltroNovas,
  setFiltroUsadas
}) {

    console.log(dadosProdutos) 
  const [novas, setNovas] = useState(false);
  const [usadas, setUsadas] = useState(false);

  function toggleNovas() {
    const novoValor = !novas;
    setNovas(novoValor);
    setFiltroNovas(novoValor);
  }

  function toggleUsadas() {
    const novoValor = !usadas;
    setUsadas(novoValor);
    setFiltroUsadas(novoValor);
  }

  return (
    <section className={styles.opcaoNovaOuUsada}>
      <h3>Nova/Usada</h3>

      <div>
        <div>
          <input
            type="checkbox"
            id="checkboxNovas"
            checked={novas}
            onChange={toggleNovas}
          />
          <label htmlFor="checkboxNovas">Novas</label>
        </div>
      </div>

      <div>
        <div>
          <input
            type="checkbox"
            id="checkboxUsadas"
            checked={usadas}
            onChange={toggleUsadas}
          />
          <label htmlFor="checkboxUsadas">Usadas</label>
        </div>
      </div>
    </section>
  );
}
