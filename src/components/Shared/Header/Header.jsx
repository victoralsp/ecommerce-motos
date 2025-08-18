import React, { useEffect, useState } from 'react';
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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

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

