import React from "react";
import styles from "./OrdenarPor.module.scss";
import { PiSlidersHorizontalFill } from "react-icons/pi";


export default function OrdenarPor () {

    return(
        <div className={styles.containerOrdenarPor}>
            <PiSlidersHorizontalFill className={styles.iconeOrdenarPor} />
            <label>
                Ordenar por:
                <select name="ordenarPorSelect">
                    <option value="maisRelevantes">Mais relevantes</option>
                    <option value="menorPreco">Menor preço</option>
                    <option value="maiorPreco">Maior preço</option>
                    <option value="maisRecentes">Mais recentes</option>
                </select>
            </label>
        </div>
    )
}