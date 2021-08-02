import React from 'react';
import styles from './search.module.css';

function Search({ setToggleMenu, toggleMenu }) {

  const handleToggleMenu = () => {
    setToggleMenu(false)
  }

  return (
    <div className={styles.search}>
      <div className={styles.searchinput}>
        <img src="/assets/search.png" alt="search" onClick={handleToggleMenu} />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default Search;
