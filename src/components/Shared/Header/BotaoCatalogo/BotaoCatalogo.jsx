import React from "react";
import { PiMotorcycleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import styles from './BotaoCatalogo.module.scss';

export default function BotaoCatalogo( { styleScrolled } ) {

    const btnCatalogoStyle = `${styles.BotaoCatalogo} ${styleScrolled ? styles.BotaoCatalogoScrolled : styles.BotaoCatalogo}`

    return (
        <button 
            className={btnCatalogoStyle}
            >
            <Link to="/catalogo"><PiMotorcycleFill className={styles.IconeMoto}/>Catálogo</Link>
        </button>
    )
}