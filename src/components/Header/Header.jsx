import React, { useState } from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import BotaoCatalogo from '../BotaoCatalogo/BotaoCatalogo';
import IconeMenu from '../IconeMenu/IconeMenu';

export default function Header()  {

  const [menuAberto, setMenuAberto] = useState(false)

  const toggleMenu = ()=> {
    setMenuAberto(!menuAberto)
  }

  return (
    <header className={styles.header}> 
    <Logo width="70px"/>
    <NavMenu isOpen={menuAberto}/>
    <BotaoCatalogo/>
    <IconeMenu onToggleMenu={toggleMenu} isOpen={menuAberto}/>
    </header>
  );
};

