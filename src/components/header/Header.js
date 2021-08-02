import React, { useState } from 'react';
import styles from './header.module.css';

function Header({ setToggleMenu, toggleMenu }) {

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="assets/logo.png" alt="logo" onClick={handleToggleMenu} />
        <h3>Docket</h3>
      </div>
      <div onClick={handleToggleMenu}>
        <img src="/assets/toggle.png" alt="toggle" />
      </div>
    </div>
  );
}

export default Header;
