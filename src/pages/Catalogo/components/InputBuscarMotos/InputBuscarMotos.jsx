import React from "react";
import styles from "./InputBuscarMotos.module.scss";
import { IoSearchSharp } from "react-icons/io5";


export default function InputBuscarMotos() {

    return (
        <section className={styles.InputBuscarMotos}>
            <form>
                <div>
                    <input type="text" placeholder="Buscar motos"/>
                    <button aria-label="Buscar localização"><IoSearchSharp /></button>
                </div>
            </form>
        </section> 
    )
}