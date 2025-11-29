import React from "react";
// import { useState } from "react";
import styles from "./ContainerMenuLateral.module.scss";
import BuscarLocalizacao from "../BuscarLocalizacao/BuscarLocalizacao";
import IconeMenuLateral from "../IconeMenuLateral/IconeMenuLateral";
import OpcaoNovaOuUsada from "../OpcaoNovaOuUsada/OpcaoNovaOuUsada";
import FiltrarMinimoMaximo from "../FiltrarMinimoMaximo/FiltrarMinimoMaximo";
import FiltrarPorMarcas from "../FiltrarPorMarcas/FiltrarPorMarcas";


export default function ContainerMenuLateral({ menuAberto, setMenuAberto, alternarMenu, dadosProdutos, setFiltroNovas, setFiltroUsadas }) {

    // console.log(dadosProdutos)
    const containerMenuLateral = `${styles.containerMenuLateral} ${menuAberto ? styles.containerMenuLateralFechado : ''}`
    const widthControllerMenu = `${styles.widthControllerMenuLateral} ${menuAberto ? styles.widthControllerMenuLateralFechado : ''}`


    return (
        <article className={containerMenuLateral}>
                <IconeMenuLateral 
                    alterarEstadoMenu={alternarMenu}
                    menuAberto={menuAberto}
                    setMenuAberto={setMenuAberto}
                />
            <div className={widthControllerMenu}>
                <BuscarLocalizacao/>
                <OpcaoNovaOuUsada
                    dadosProdutos={dadosProdutos}
                    setFiltroNovas={setFiltroNovas}
                    setFiltroUsadas={setFiltroUsadas}
                />
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