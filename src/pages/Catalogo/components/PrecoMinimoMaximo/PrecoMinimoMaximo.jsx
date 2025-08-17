import React from "react";
import styles from "./PrecoMinimoMaximo.module.scss";

export default function PrecoMinimoMaximo() {

    return (
        <>
            <section className={styles.PrecoMinimoMaximo}>
                <h3>Preço</h3>
                <div>
                    <input type="text" placeholder="Preço mínimo"/>
                    <input type="text" placeholder="Preço máximo"/>
                </div>
            </section>
        </>
    )
}