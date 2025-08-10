import React from "react";
import Main from "../../components/Main/Main.jsx";
import Header from "../../components/Header/Header.jsx";
import styles from "./Home.module.scss";

export default function Home() {

    return (
        <body className={styles.bodyHome}>
            <Header/>
            <Main/>
        </body>
    )
}