import React from "react";
import styles from "./BuscarLocalizacao.module.scss";
import { IoSearchSharp } from "react-icons/io5";


export default function BuscarLocalizacao() {

    return (
        <section className={styles.buscarLocalizacao}>
            <h3>Localização</h3>
            <form>
                <div>
                    <input type="text" placeholder="Digite sua cidade ou estado"/>
                    <button aria-label="Buscar localização"><IoSearchSharp /></button>
                </div>
            </form>
        </section> 
    )
}