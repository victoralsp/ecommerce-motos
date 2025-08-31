import React from "react";
import { useState, useEffect } from "react";
import styles from './Catalogo.module.scss';
import Header from "../../components/Shared/Header/Header.jsx";
import Breadcrumbs from "../../components/Shared/Breadcrumbs/Breadcrumbs.jsx";
import ContainerMenuLateral from "./components/ContainerMenuLateral/ContainerMenuLateral.jsx";
import ResultadosEncontrados from "./components/ResultadosEncontrados/ResultadosEncontrados.jsx";
import InputBuscarMotos from "./components/InputBuscarMotos/InputBuscarMotos.jsx";
import OrdenarPor from "./components/OrdenarPor/OrdenarPor.jsx";
import { GoHeartFill } from "react-icons/go";

export default function Catalogo() {

    const [menuAberto, setMenuAberto] = useState(false)

    const alternarMenu = () => {
        setMenuAberto(!menuAberto)
    }

    const containerCatalogo = `${styles.containerCatalogo} ${menuAberto ? styles.containerCatalogoMenuFechado : ''}`



    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


    return (
        <body className={styles.bodyCatalogo}>  
            <Header 
                scrolled={scrolled}
                />
            <main>
            <Breadcrumbs 
                scrolled={scrolled}
            />
            <ContainerMenuLateral
                menuAberto={menuAberto}
                setMenuAberto={setMenuAberto}
                alternarMenu={alternarMenu}
            />
            <section className={containerCatalogo}>
                <section className={styles.catalogoControles}>
                    <div className={styles.qtdEncontradosEFiltrarPor}>
                        <div className={styles.containerFiltrosEsquerda}>
                            <ResultadosEncontrados/>
                            <span>/</span>
                            <OrdenarPor/>
                        </div>
                        <div className={styles.containerFiltrosDireita}>
                            <InputBuscarMotos/>
                            <div className={styles.containerFavoritos}>
                                <GoHeartFill className={styles.iconeFavoritos}/>
                                <p>1</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            </main>
            
        </body>
    )
}