import React from "react";
import styles from './ResultadosEncontrados.module.scss'; 

export default function ResultadosEncontrados( { lengthDadosProdutos } ) {

    return(
        
        <p className={styles.qtdAnunciosEncontrados}>{lengthDadosProdutos > 0 ? `${lengthDadosProdutos} anúncios encontrados` : "Nenhum anúncio encontrado"}
        </p>
    )
}