import React from "react";
import styles from "./FiltrarMinimoMaximo.module.scss";

export default function FiltrarMinimoMaximo( { funcaoSubtitulo, nomeIntervaloMinimo, nomeIntervaloMaximo } ) {

    return (
        <>
            <section className={styles.FiltrarMinimoMaximo}>
                <h3>{funcaoSubtitulo}</h3>
                <div>
                    <input type="text" placeholder={nomeIntervaloMinimo}/>
                    <input type="text" placeholder={nomeIntervaloMaximo}/>
                </div>
            </section>
        </>
    )
}