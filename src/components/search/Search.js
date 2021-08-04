import React, { useContext } from 'react';
import styles from './search.module.css';

import { ToggleMenuContext } from '../toggleMenuContext';

function Search() {
  const toggleMenu = useContext(ToggleMenuContext)

  return (
    <div className={styles.search}>
      <div className={styles.searchinput}>
        <img src="/assets/search.png" alt="search" className={styles.searchimg} onClick={toggleMenu.showMenu}/>
        <input type="text" placeholder="Search" className={styles.input} />
      </div>
    </div>
  );
}

export default Search;
