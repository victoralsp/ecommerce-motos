import React from "react";
import styles from './PosicaoItensCarrossel.module.scss';
import { FaLessThan, FaGreaterThan } from "react-icons/fa";


export default function PosicaoItensCarrossel({ voltarSlide, passarSlide, infosMotosCarrossel, mudarPeloDot, indexAtual }) {
    return (
        <div className={styles.ContainerPositionSlider}>
            <button onClick={voltarSlide} className={styles.btnVoltarSlide} style={{ color: infosMotosCarrossel[indexAtual].corTexto }} aria-label="Voltar para produto anterior"><FaLessThan /></button>

            {infosMotosCarrossel.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => mudarPeloDot(slideIndex)}>
                    <div 
                        className={`${styles.dotMudarSlide} 
                        ${indexAtual === slideIndex ? styles.dotAtivo : ""
                        }`}>
                    </div>
                </div>
            ))}
            <button onClick={passarSlide} className={styles.btnPassarSlide} style={{ color: infosMotosCarrossel[indexAtual].corTexto }} aria-label="Ir para o próximo produto"><FaGreaterThan /></button>
        </div>
    )
}




