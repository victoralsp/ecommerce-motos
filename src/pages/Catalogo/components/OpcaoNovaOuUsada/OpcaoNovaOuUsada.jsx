import React from "react";
import styles from "./OpcaoNovaOuUsada.module.scss";

export default function OpcaoNovaOuUsada() {

    return (
        <>
            <section className={styles.opcaoNovaOuUsada}>
                <h3>Nova/Usada</h3>
                <div>
                    <div>
                        <input type="checkbox" id="checkboxNovas"/>
                        <label htmlFor="checkboxNovas">Novas</label>
                    </div>
                    <p><span>(10)</span></p>
                </div>
                <div>
                    <div>
                        <input type="checkbox" id="checkboxUsadas"/>
                        <label htmlFor="checkboxUsadas">Usadas</label>
                    </div>
                    <p><span>(32)</span></p>
                </div>
            </section>
        </>
    )
}