import React from 'react';
import styles from './Logo.module.scss';
import logoIconWhite from '../../../../assets/icones/logoUrbanDrive.png';
import logoIconBlack from '../../../../assets/icones/logoUrbanDriveBlack.png';

export default function Logo({ width = "100px", changeScrolled })  {

    const logoStyleWidth = {
        width: width
    }

    const logoUrl = changeScrolled ? logoIconBlack : logoIconWhite
    const logoStyle = changeScrolled ? styles.logoImageScrolled : styles.logoImage

  return (
    <div href="/" className={styles.logoContainer} style={logoStyleWidth}>
      <img 
        src={logoUrl} 
        alt="Logo da Loja" 
        className={logoStyle} 
      />
    </div>
  );
};

