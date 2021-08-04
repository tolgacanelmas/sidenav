import React, { useState , useContext } from 'react';
import styles from './categories.module.css';
import { ToggleMenuContext } from '../toggleMenuContext';

function MenuItem({ name, img, subCategory, id }) {
    const [isHidden, setIsHidden] = useState(true)
    const toggleMenu = useContext(ToggleMenuContext)

    const handleSubMenu = () => {
        setIsHidden(!isHidden)
    }

    return (
        <div className={styles.category} key={id} onClick={toggleMenu.showMenu}>
            <div className={styles.categoryname} onClick={handleSubMenu}>
                <img src={`/assets${img}`} alt="icon" className={styles.icon} />
                <p className={styles.categorytitle}>
                    {name}
                </p>
            </div>
            {
                subCategory.length > 0 &&
                <div className={`${isHidden ? "" : styles.active} ${styles.subcategorycontainer}`}>
                    {
                        subCategory && subCategory.map((subCategory, i) => {
                            return (
                                <div className={styles.subcategorytitle} key={i}>
                                    {subCategory}
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    );
}

export default MenuItem;
