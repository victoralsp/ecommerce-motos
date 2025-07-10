import React, { useState } from "react";
import styles from './MainHeroCarrossel.module.scss';
import imgFazer150 from '../../assets/imagens/fazer150.png';
import imgCg160 from '../../assets/imagens/cg160.png';
import imgNs160 from '../../assets/imagens/ns160.png';
import imgDr160s from '../../assets/imagens/dr160s.png';
import PosicaoItensCarrossel from "../PosicaoItensCarrossel/PosicaoItensCarrossel";

export default function MainHeroCarrossel() {

    const infosMotosCarrossel = [
       {
            url: imgFazer150,
            nomeMoto: 'Fazer 150',
            corTexto: '#5e5e5e', 
            bgColor: 'radial-gradient(circle, rgba(58, 58, 58, 1) 0%, rgb(0, 0, 0) 100%)'
        },
        {
            url: imgNs160,
            nomeMoto: 'BAJAJ NS 160',
            corTexto: '#9e2427', 
            bgColor: 'radial-gradient(circle, rgb(98, 26, 27) 0%, rgb(0, 0, 0) 100%)'
        },
        {
            url: imgCg160,
            nomeMoto: 'CG 160 TITAN',
            corTexto: '#dc6308', 
            bgColor: 'radial-gradient(circle, rgb(113, 58, 23) 0%, rgb(0, 0, 0) 100%)'
        },
        {
            url: imgDr160s,
            nomeMoto: 'Dr 160s haojue',
            corTexto: '#b0b0b0', 
            bgColor: 'radial-gradient(circle, rgb(108, 108, 108) 0%, rgba(0, 0, 0, 1) 100%)'
        }
    ]

    const [indexAtual, setIndexAtual] = useState(0)
    const [animacao, setAnimacao] = useState('')
    const [direcao, setDirecao] = useState("")


    const trocarSlide = (novoIndex, direcaoClicada) => {
        setDirecao(direcaoClicada);
        setAnimacao("saida");

        setTimeout(() => {
            setIndexAtual(novoIndex);
            setAnimacao("entrada");
        }, 500);
    };


    const prevSlide = () => {
        const primeiroSlide = indexAtual === 0
        const novoIndex = primeiroSlide ? infosMotosCarrossel.length - 1 : indexAtual - 1
        trocarSlide(novoIndex, 'next')
    }

    const nextSlide = () => {
        const ultimoSlide = indexAtual === infosMotosCarrossel.length - 1
        const novoIndex = ultimoSlide ? 0 : indexAtual + 1
        trocarSlide(novoIndex, 'prev')
    }

    const mudarPeloDot = (slideIndex) => {
        if (slideIndex === indexAtual) return

        const direcaoClicada = slideIndex > indexAtual ? "prev" : "next";
        trocarSlide(slideIndex, direcaoClicada)
    }

    return (
        <article className={styles.articleMainHeroCarrossel} style={{ background: infosMotosCarrossel[indexAtual].bgColor }}>
            <p
                style={{ color: infosMotosCarrossel[indexAtual].corTexto }}
                className={`${styles.textoCarrossel} ${styles[`animacaoTexto-${animacao}-${direcao}`]}`}>
                {infosMotosCarrossel[indexAtual].nomeMoto}
            </p>
            <a href="#">
                <img
                src={infosMotosCarrossel[indexAtual].url}
                className={`${styles.imagemMotoCarrossel} ${styles[`${animacao}-${direcao}`]}`}
                alt="foto da moto"
            />
            </a>
            <PosicaoItensCarrossel
                passarSlide={nextSlide}
                voltarSlide={prevSlide}
                infosMotosCarrossel={infosMotosCarrossel}
                mudarPeloDot={mudarPeloDot}
                indexAtual={indexAtual}
            />
        </article>
    )
}