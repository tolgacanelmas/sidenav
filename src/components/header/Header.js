import React, { useState } from 'react';
import styles from './header.module.css';

function Header({handleContentHidden}) {


  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="assets/logo.png" alt="logo" />
        <h3>Docket</h3>
      </div>
      <div onClick={() => handleContentHidden()}>
        <img src="/assets/toggle.png" alt="toggle"/>
      </div>
    </div>
  );
}

export default Header;
