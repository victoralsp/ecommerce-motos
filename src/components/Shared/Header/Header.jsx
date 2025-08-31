import React, { useState } from 'react';
import styles from './Header.module.scss';
import Logo from './Logo/Logo';
import NavMenu from './NavMenu/NavMenu';
import BotaoCatalogo from './BotaoCatalogo/BotaoCatalogo';
import IconeMenu from './IconeMenu/IconeMenu';
import { Link } from 'react-router-dom';

export default function Header( { scrolled } )  {

  const [menuAberto, setMenuAberto] = useState(false)

  const toggleMenu = ()=> {
    setMenuAberto(!menuAberto)
  }


    const headerClass = `${styles.header} ${scrolled ? styles.headerScrolled : ''}`
    const headerClassContainer = `${styles.headerContainer} ${scrolled ? styles.headerContainerScrolled : ''}`

  return (
    <header className={headerClass}>
        <div className={headerClassContainer}>
          <Link to="/">
            <Logo width="70px"/>
          </Link>
          <NavMenu isOpen={menuAberto}/>
          <BotaoCatalogo/>
          <IconeMenu onToggleMenu={toggleMenu} isOpen={menuAberto}/>
        </div>
      </header>
  );
};

