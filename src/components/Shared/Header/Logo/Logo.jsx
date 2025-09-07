import React from 'react';
import styles from './Logo.module.scss';
import logoIcon from '../../../../assets/icones/logoUrbanDrive.png';

export default function Logo({width = "100px"})  {

    const logoStyleWidth = {
        width: width
    }

  return (
    <div href="/" className={styles.logoContainer} style={logoStyleWidth}>
      <img 
        src={logoIcon} 
        alt="Logo da Loja" 
        className={styles.logoImage} 
      />
    </div>
  );
};

