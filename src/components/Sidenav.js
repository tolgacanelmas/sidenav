import React, { useState } from 'react';

import styles from './sidenav.module.css';

import Header from './header/Header';
import Search from './search/Search';
import Categories from './categories/Categories';
import Notification from './Notification';
import Settings from './Settings';
import Profile from './Profile';

import { ToggleMenuContext } from './toggleMenuContext';

const Sidenav = () => {
    const [isToggled, setIsToggled] = useState(false);

    const providerValues = {
        toggle: () => {
            setIsToggled(!isToggled)
        },
        showMenu: () => {
            setIsToggled(false)
        }
    }

    return (
        <div className={`${isToggled ? styles.hidden : ""} ${styles.sidenav}`}>
            <ToggleMenuContext.Provider value={providerValues}>
                <Header />
                <Search />
                <Categories />
                <Notification />
                <Settings />
                <Profile />
            </ToggleMenuContext.Provider>
        </div>
    )
}

export default Sidenav;