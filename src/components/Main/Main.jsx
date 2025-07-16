import React from "react";
import MainHeroCarrossel from "../MainHeroCarrossel/MainHeroCarrossel";
import LogosPassando from "../LogosPassando/LogosPassando";
import styles from './Main.module.scss';

export default function Main() {
    return (
        <main className={styles.main}>
            <MainHeroCarrossel />
            <LogosPassando/>
        </main>
    )
}