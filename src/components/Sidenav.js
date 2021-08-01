import React from 'react'
import Header from './header/Header';
import Search from './search/Search';
import Categories from './categories/Categories';
import Notification from './Notification';
import Settings from './Settings';
import Profile from './Profile';

const Sidenav = ({handleContentHidden}) => {
    return (
        <>
            <Header handleContentHidden={handleContentHidden}/>
            <Search />
            <Categories />
            <Notification />
            <Settings />
            <Profile />
        </>
    )
}

export default Sidenav;