import React, { useState } from "react";
import styles from './MainHeroCarrossel.module.scss';
import imgFazer150 from '../../assets/imagens/fazer150.png';
import imgCg160 from '../../assets/imagens/cg160.png';
import imgNs160 from '../../assets/imagens/ns160.png';
// import imgDr160s from '../../assets/imagens/dr160.png';
import PosicaoItensCarrossel from "../PosicaoItensCarrossel/PosicaoItensCarrossel";

export default function MainHeroCarrossel() {

    const infosMotosCarrossel = [
        {
            url: imgFazer150,
            widthImg: '720px', 
            nomeMoto: 'Fazer 150', 
            corTexto: '#727272',
            bgColor: 'radial-gradient(circle, rgba(38, 38, 38, 1) 0%,rgb(0, 0, 0) 100%)'
        },
        {
            url: imgNs160, 
            widthImg: '690px', 
            nomeMoto: 'BAJAJ NS 160', 
            corTexto: '#b5292c',
            bgColor: 'radial-gradient(circle,rgba(181, 41, 44, 1) 0%, rgb(0, 0, 0) 100%)'
        },
        {
            url: imgCg160, 
            nomeMoto: 'CG 160 TITAN', 
            widthImg: '900px', 
            corTexto: '#f97109',
            bgColor: 'radial-gradient(circle,rgba(249, 113, 9, 1) 0%, rgb(0, 0, 0) 100%)'
        }
    ]

    const [indexAtual, setIndexAtual] = useState(0)

    const prevSlide = () => {
        const primeiroSlide = indexAtual === 0
        const novoIndex = primeiroSlide ? infosMotosCarrossel.length - 1 : indexAtual - 1
        setIndexAtual(novoIndex)
    }

    const nextSlide = () => {
        const ultimoSlide = indexAtual === infosMotosCarrossel.length - 1
        const novoIndex = ultimoSlide ? 0 : indexAtual + 1
        setIndexAtual(novoIndex)
    }

    const mudarPeloDot = (slideIndex) => {
        setIndexAtual(slideIndex)
    }

    return (
        <article className={styles.articleMainHeroCarrossel} style={{ background: infosMotosCarrossel[indexAtual].bgColor }}>
            <p style={{ color: infosMotosCarrossel[indexAtual].corTexto }}>{infosMotosCarrossel[indexAtual].nomeMoto}</p>
            <img src={infosMotosCarrossel[indexAtual].url}  style={{ width: infosMotosCarrossel[indexAtual].widthImg }} alt="foto da moto"/>
            <PosicaoItensCarrossel
                passarSlide = {nextSlide}
                voltarSlide = {prevSlide}
                infosMotosCarrossel = {infosMotosCarrossel}
                mudarPeloDot = {mudarPeloDot}
                indexAtual = {indexAtual}
            />
        </article>
    )
}