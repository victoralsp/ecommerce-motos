import React from "react";
import styles from "./ContainerMenuLateral.module.scss";
import BuscarLocalizacao from "../BuscarLocalizacao/BuscarLocalizacao";
import IconeMenuLateral from "../IconeMenuLateral/IconeMenuLateral";
import OpcaoNovaOuUsada from "../OpcaoNovaOuUsada/OpcaoNovaOuUsada";
import PrecoMinimoMaximo from "../PrecoMinimoMaximo/PrecoMinimoMaximo";
import FiltrarPorMarcas from "../FiltrarPorMarcas/FiltrarPorMarcas";


export default function ContainerMenuLateral() {

    return (
        <article className={styles.containerMenuLateral}>
            <div className={styles.widthControllerMenuLateral}>
                <IconeMenuLateral/>
                <BuscarLocalizacao/>
                <OpcaoNovaOuUsada/>
                <PrecoMinimoMaximo/>
                <FiltrarPorMarcas/>
            </div>
        </article>
    )
}