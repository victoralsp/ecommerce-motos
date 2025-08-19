import React from "react";
import { useState } from "react";
import styles from './Catalogo.module.scss';
import Header from "../../components/Shared/Header/Header.jsx";
import Breadcrumbs from "../../components/Shared/Breadcrumbs/Breadcrumbs.jsx";
import ContainerMenuLateral from "./components/ContainerMenuLateral/ContainerMenuLateral.jsx";

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
            <div className={containerCatalogo}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            </main>
            
        </body>
    )
}