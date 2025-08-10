import React from "react";
import { PiMotorcycleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import styles from './BotaoCatalogo.module.scss';

export default function BotaoCatalogo() {
    return (
        <button className={styles.BotaoCatalogo}>
            <Link to="/catalogo"><PiMotorcycleFill className={styles.IconeMoto}/>Catálogo</Link>
        </button>
    )
}