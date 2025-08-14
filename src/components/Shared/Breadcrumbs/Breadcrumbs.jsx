import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss'; 

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumbs}>
      <ol>
        <li>
          <Link to="/" className={styles.homeLink}>Home</Link>
        </li>
        {pathnames.map((name, index) => {
          const isLast = index === pathnames.length - 1;
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={name}>
              <span style={{ margin: '0 8px' }} className={styles.pagAtual} >&gt;</span>
              {isLast ? (
                <span className={styles.pagAtual} >{name.charAt(0).toUpperCase() + name.slice(1)}</span>
              ) : (
                <Link to={routeTo}>{name.charAt(0).toUpperCase() + name.slice(1)}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;