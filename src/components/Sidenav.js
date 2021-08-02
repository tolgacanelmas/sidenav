import React, { useState } from 'react'
import styles from './sidenav.module.css'

import Header from './header/Header';
import Search from './search/Search';
import Categories from './categories/Categories';
import Notification from './Notification';
import Settings from './Settings';
import Profile from './Profile';

const Sidenav = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className={`${toggleMenu ? styles.hidden : ""} ${styles.sidenav}`}>
            <Header setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
            <Search setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
            <Categories setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
            <Notification />
            <Settings />
            <Profile />
        </div>
    )
}

export default Sidenav;