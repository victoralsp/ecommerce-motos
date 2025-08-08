import React from "react";
import { PiMotorcycleFill } from "react-icons/pi";
import styles from './BotaoCatalogo.module.scss';

export default function BotaoCatalogo() {
    return (
        <button className={styles.BotaoCatalogo}>
            <a href="/"><PiMotorcycleFill className={styles.IconeMoto}/>Catálogo</a>
        </button>
    )
}