import React from "react";
import Main from "./components/Main/Main.jsx";
import Header from "../../components/Shared/Header/Header.jsx";
import styles from "./Home.module.scss";
// import { useEffect } from "react";

export default function Home() {

    return (
        <div className={styles.bodyHome}>
            <Header/>
            <Main/>
        </div>
    )
}