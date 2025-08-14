import React, { useState } from 'react';
import styles from './Header.module.scss';
import Logo from './Logo/Logo';
import NavMenu from './NavMenu/NavMenu';
import BotaoCatalogo from './BotaoCatalogo/BotaoCatalogo';
import IconeMenu from './IconeMenu/IconeMenu';
import { Link } from 'react-router-dom';

export default function Header()  {

  const [menuAberto, setMenuAberto] = useState(false)

  const toggleMenu = ()=> {
    setMenuAberto(!menuAberto)
  }

  return (
    <header className={styles.header}> 
    <Link to="/">
      <Logo width="70px"/>
    </Link>
    <NavMenu isOpen={menuAberto}/>
    <BotaoCatalogo/>
    <IconeMenu onToggleMenu={toggleMenu} isOpen={menuAberto}/>
    </header>
  );
};

