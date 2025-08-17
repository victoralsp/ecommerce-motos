import React from "react";
import styles from "./ContainerMenuLateral.module.scss";
import BuscarLocalizacao from "../BuscarLocalizacao/BuscarLocalizacao";
import IconeMenuLateral from "../IconeMenuLateral/IconeMenuLateral";
import OpcaoNovaOuUsada from "../OpcaoNovaOuUsada/OpcaoNovaOuUsada";
import FiltrarMinimoMaximo from "../FiltrarMinimoMaximo/FiltrarMinimoMaximo";
import FiltrarPorMarcas from "../FiltrarPorMarcas/FiltrarPorMarcas";


export default function ContainerMenuLateral() {

    return (
        <article className={styles.containerMenuLateral}>
            <div className={styles.widthControllerMenuLateral}>
                <IconeMenuLateral/>
                <BuscarLocalizacao/>
                <OpcaoNovaOuUsada/>
                <FiltrarMinimoMaximo
                    funcaoSubtitulo='Preço' 
                    nomeIntervaloMinimo='Preço mínimo' 
                    nomeIntervaloMaximo='Preço máximo'
                />
                <FiltrarPorMarcas/>
                <FiltrarMinimoMaximo
                    funcaoSubtitulo='Ano' 
                    nomeIntervaloMinimo='Ano mínimo' 
                    nomeIntervaloMaximo='Ano máximo'
                />
            </div>
        </article>
    )
}