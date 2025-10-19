import React from "react";
import styles from './NavMenu.module.scss';

export default function NavMenu({ isOpen }) {
    return (
        <nav className={`${styles.NavBar} ${isOpen ? styles.open : styles.NavBar}`} > 
            <ul>
                <li><a href="#">Ofertas</a></li>
                <li><a href="#">Test Ride</a></li>
                <li><a href="#">Lojas</a></li>
                <li><a href="#">Contatos</a></li>
            </ul>
        </nav>
    )
}