import React from "react";
import { useState } from "react";
import styles from './Catalogo.module.scss';
import Header from "../../components/Shared/Header/Header.jsx";
import Breadcrumbs from "../../components/Shared/Breadcrumbs/Breadcrumbs.jsx";
import ContainerMenuLateral from "./components/ContainerMenuLateral/ContainerMenuLateral.jsx";
import ResultadosEncontrados from "./components/resultadosEncontrados/ResultadosEncontrados.jsx";

export default function Catalogo() {

    const [menuAberto, setMenuAberto] = useState(false)

    const alternarMenu = () => {
        setMenuAberto(!menuAberto)
    }

    const containerCatalogo = `${styles.containerCatalogo} ${menuAberto ? styles.containerCatalogoMenuFechado : ''}`

    return (
        <body className={styles.bodyCatalogo}>  
            <Header/>
            <main>
            <Breadcrumbs />
            <ContainerMenuLateral
                menuAberto={menuAberto}
                setMenuAberto={setMenuAberto}
                alternarMenu={alternarMenu}
            />
            <section className={containerCatalogo}>
                <section className={styles.catalogoControles}>
                    <div className={styles.qtdEncontradosEFiltrarPor}>
                        <ResultadosEncontrados/>
                        <span>/</span>

                    </div>
                </section>
            </section>
            </main>
            
        </body>
    )
}