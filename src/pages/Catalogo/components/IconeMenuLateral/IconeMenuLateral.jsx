import React  from "react";
import styles from "./IconeMenuLateral.module.scss";
// import { useState } from "react";
import { MdOutlineExpandLess } from "react-icons/md";

export default function IconeMenuLateral({ alterarEstadoMenu, menuAberto }) {

    const btnMenuLateral = `${styles.btnMenuLateral} ${menuAberto ? styles.btnMenuLateralFechado : ''}`

    return (
        <>
            <button className={btnMenuLateral} onClick={alterarEstadoMenu}>
               <MdOutlineExpandLess/>
            </button>
        </>
    )
}