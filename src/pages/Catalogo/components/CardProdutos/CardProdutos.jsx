import React from "react";
import styles from './CardProdutos.module.scss';
import { GoHeartFill } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { PiSpeedometerLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";


export default function CardProdutos( { infosProduto, formatarValor } ) {

    const limitarTexto = (texto, limite) => {
        if (texto.length > limite) {
            return texto.slice(0, limite) + '...';
        }
        return texto;
    };

    
    return (
        <>
            <article className={styles.CardProdutosContainer}>
                <button className={styles.btnAddFavoritos}><GoHeartFill/></button>
                <img src={infosProduto.img_produto} alt="Imagem da moto" />
                    <div className={styles.containerInfosMoto}>
                        <h3>{limitarTexto(infosProduto.nome_produto, 20)}</h3>
                        <div className={styles.anoEquilometragem}>
                            <div className={styles.iconeEinfo}>
                                <CiCalendar  className={styles.iconeInfo}/> 
                                <p>{infosProduto.ano_produto}</p>
                            </div>
                            <div className={styles.iconeEinfo}>
                                <PiSpeedometerLight className={styles.iconeInfo}/>
                                <p>{infosProduto.quilometragem} KM</p>
                            </div>
                        </div>
                            <div className={styles.iconeEinfo}>
                                <CiLocationOn className={styles.iconeInfo}/> 
                                <p>{infosProduto.cidade_anuncio} / {infosProduto.uf_anuncio}</p>
                            </div>
                        <p className={styles.paragrafoPreco}>{formatarValor(infosProduto.valor)}</p>
                        <button className={styles.btnVerDetalhes}>Ver detalhes</button>
                    </div>
            </article>

        </>
    )
}