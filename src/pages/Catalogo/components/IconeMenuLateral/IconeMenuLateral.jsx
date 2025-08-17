import React from "react";
import styles from "./IconeMenuLateral.module.scss";
import { TbMenuDeep } from "react-icons/tb";
import { CgClose } from "react-icons/cg";

export default function IconeMenuLateral() {
    return (
        <>
            <button className={styles.btnMenuLateral}><CgClose/></button>
        </>
    )
}