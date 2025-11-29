import React from "react";
import { TbMenuDeep } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import styles from './IconeMenu.module.scss';

export default function IconeMenu({ onToggleMenu, isOpen, styleScrolled }) {


      const styleIconeMenu = `${styles.styleIconeMenu} ${styleScrolled ? styles.styleScrolledIconeMenu : ''}`

    return (
        <button 
            className={styleIconeMenu} 
            onClick={onToggleMenu}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            >{isOpen ?  <CgClose/> : <TbMenuDeep/>}
        </button>
    )
}