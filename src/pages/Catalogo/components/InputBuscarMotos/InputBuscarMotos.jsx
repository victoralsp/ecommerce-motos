import React from "react";
import { useState } from "react";
import styles from "./InputBuscarMotos.module.scss";
import { IoSearchSharp } from "react-icons/io5";


export default function InputBuscarMotos( { setTermoBusca } ) {


    const [valorInput, setValorInput] = useState("");

    const handleChange = (evento) => {
        const novoValor = evento.target.value
        setValorInput(novoValor)
        setTermoBusca(novoValor)
    };

    const handleSubmit = (evento) => {
        evento.preventDefault()
    }

    return (
        <section className={styles.InputBuscarMotos}>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        id="filtrarProduto"
                        name="filtrarProduto"
                        type="text" 
                        placeholder="Buscar motos"
                        value={valorInput}
                        onChange={handleChange}
                        />
                    <button aria-label="Buscar localização"><IoSearchSharp /></button>
                </div>
            </form>
        </section> 
    )
}