import React, { useState } from "react";
import styles from './MainHeroCarrossel.module.scss';
import imgFazer150 from '../../assets/imagens/fazer150.png';
import PosicaoItensCarrossel from "../PosicaoItensCarrossel/PosicaoItensCarrossel";

export default function MainHeroCarrossel() {

    const infosMotosCarrossel = [
        {url: imgFazer150, nomeMoto: 'Fazer 150',},
        {url: 'https://placehold.co/800x400', nomeMoto: 'TesteUm'},
        {url: 'https://placehold.co/500x400', nomeMoto: 'TesteDois'},
        {url: 'https://placehold.co/600x400', nomeMoto: 'TesteTres'},
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
        <article className={styles.articleMainHeroCarrossel}>
            <p>{infosMotosCarrossel[indexAtual].nomeMoto}</p>
            <img src={infosMotosCarrossel[indexAtual].url} alt="foto da moto"/>
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