import React, { useContext } from 'react';
import { ToggleMenuContext } from '../toggleMenuContext';
import styles from './header.module.css';

function Header() {
  const toggleMenu = useContext(ToggleMenuContext)

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="assets/logo.png" alt="logo"  onClick={toggleMenu.toggle}/>
        <h3>Docket</h3>
      </div>
      <div onClick={toggleMenu.toggle}>
        <img src="/assets/toggle.png" alt="toggle" />
      </div>
    </div>
  );
}

export default Header;
