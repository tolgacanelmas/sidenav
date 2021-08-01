import React from 'react';
import styles from './search.module.css';

function Search() {
  return (
    <div className={styles.search}>
      <div className={styles.searchinput}>
        <img src="/assets/search.png" alt="search" />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default Search;
