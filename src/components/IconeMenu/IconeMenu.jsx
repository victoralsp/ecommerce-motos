import React from "react";
import { TbMenuDeep } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import styles from './IconeMenu.module.scss';

export default function IconeMenu({ onToggleMenu, isOpen }) {

    return (
        <button className={styles.IconeMenu} onClick={onToggleMenu}>{isOpen ?  <CgClose/> : <TbMenuDeep/>
}</button>
    )
}