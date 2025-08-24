import React  from "react";
import styles from "./IconeMenuLateral.module.scss";
// import { useState } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { CgClose } from "react-icons/cg";

export default function IconeMenuLateral({ alterarEstadoMenu, menuAberto }) {


    return (
        <>
            <button className={styles.btnMenuLateral} onClick={alterarEstadoMenu}>
                {menuAberto ? <TbMenuDeep/> : <CgClose/>}
            </button>
        </>
    )
}