import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.headerContainer}>
        <h1 className={styles.headerText}>
            A GUIDE TO MY 2023
        </h1>
        <div className={styles.headerCaption}>
            Click on each month to see what I did! 
        </div>
    </header>
    )};

export default Header;
