import React from "react";
import styles from './PosicaoItensCarrossel.module.scss';
import { FaLessThan, FaGreaterThan } from "react-icons/fa";


export default function PosicaoItensCarrossel({ voltarSlide, passarSlide, infosMotosCarrossel, mudarPeloDot, indexAtual }) {
    return (
        <div className={styles.ContainerPositionSlider}>
            <button onClick={voltarSlide}><FaLessThan /></button>

            {infosMotosCarrossel.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => mudarPeloDot(slideIndex)}>
                    <div 
                        className={`${styles.dotMudarSlide} 
                        ${indexAtual === slideIndex ? styles.dotAtivo : ""
                        }`}>
                    </div>
                </div>
            ))}
            <button onClick={passarSlide}><FaGreaterThan /></button>
        </div>
    )
}




