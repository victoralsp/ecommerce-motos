import React from "react";
import styles from './CardProdutos.module.scss';
import { GoHeartFill } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { PiSpeedometerLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";


export default function CardProdutos() {

    return (
        <>
            <article className={styles.CardProdutosContainer}>
                <button className={styles.btnAddFavoritos}><GoHeartFill/></button>
                <img src="https://placehold.co/400" alt="" />
                    <div className={styles.containerInfosMoto}>
                        <h3>nome_produto</h3>
                        <div className={styles.anoEquilometragem}>
                            <div className={styles.iconeEinfo}>
                                <CiCalendar  className={styles.iconeInfo}/> 
                                <p>ano_produto</p>
                            </div>
                            <div className={styles.iconeEinfo}>
                                <PiSpeedometerLight className={styles.iconeInfo}/>
                                <p>quilometragem KM</p>
                            </div>
                        </div>
                            <div className={styles.iconeEinfo}>
                                <CiLocationOn className={styles.iconeInfo}/> 
                                <p>cidade / uf</p>
                            </div>
                        <p className={styles.paragrafoPreco}>R$ valor_produto</p>
                        <button className={styles.btnVerDetalhes}>Ver detalhes</button>
                    </div>
            </article>

        </>
    )
}