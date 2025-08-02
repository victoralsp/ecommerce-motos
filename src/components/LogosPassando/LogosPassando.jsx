import React from "react";
import styles from './LogosPassando.module.scss';
import Marquee from "react-fast-marquee";


export default function LogosPassando( { LogosMarcas } ) {
    return (
        <article className={styles.ArticleLogosPassando}>
            <Marquee speed={50} autoFill={true} gradient={true} gradientWidth={400} gradientColor={[20, 20, 20]}>
                    {LogosMarcas.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Logo ${index + 1}`}
                    />
                ))}
            </Marquee>
        </article>
    )
}
