import React, { useState } from 'react';
import styles from './categories.module.css';

function MenuItem({ name, img, subCategory, setToggleMenu, toggleMenu }) {
    const [isHidden, setIsHidden] = useState(true)

    const handleSubMenu = () => {
        setIsHidden(!isHidden)
    }

    const handleToggleMenu = () => {
        setToggleMenu(false)
    }

    if (subCategory.length > 0) {
        return (
            <div className={styles.category} >
                <div className={styles.categoryname} onClick={handleSubMenu}>
                    <img src={`/assets${img}`} alt="icon" onClick={handleToggleMenu} />
                    <p>
                        {name}
                    </p>
                </div>
                <div className={`${isHidden ? "" : styles.active} ${styles.subcategorycontainer}`}>
                    {
                        subCategory.map((subCategory) => {
                            return (
                                <div>
                                    {subCategory}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles.category} >
                <div className={styles.categoryname}>
                    <img src={`/assets${img}`} alt="icon" onClick={handleToggleMenu} />
                    <p>
                        {name}
                    </p>
                </div>
            </div>
        );
    }

}

export default MenuItem;
