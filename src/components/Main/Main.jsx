import React from "react";
import MainHeroCarrossel from "../MainHeroCarrossel/MainHeroCarrossel";
import LogosPassando from "../LogosPassando/LogosPassando";
import styles from './Main.module.scss';

import LogoBajaj from '../../assets/imagens/bajaj-logo.png';
import LogoHaojue from '../../assets/imagens/Logo-Haojue.png';
import LogoHonda from '../../assets/imagens/honda_logo.png';
import LogoYamaha from '../../assets/imagens/yamaha-logo.png';

const LogosMarcas = [
    LogoBajaj,
    LogoHaojue,
    LogoHonda,
    LogoYamaha
]

export default function Main() {
    return (
        <main className={styles.main}>
            <MainHeroCarrossel />
            <LogosPassando LogosMarcas = {LogosMarcas} />
        </main>
    )
}