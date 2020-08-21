import React from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from './Header.module.css';

const Header = (props) => {

    let currentRoute = useLocation().pathname;
    let links = props.links.map((link,index) => {
        let className = (link.path === currentRoute) ? styles.currentRouteLink : styles.link;
        return (
            <li key={index} className={styles['navigation-list-item']}>
                <Link className={className} to={link.path}>
                    {link.label}
                </Link>
            </li>
        );
    });

    return (
        <header className={styles['header']}>
            <h1 className={styles['title']}>Filip Ogonowski</h1>
            <nav className={styles['navigation']}>
                <ul className={styles['navigation-list']}>
                {links}
                </ul>
            </nav>
        </header>
    );
}

export default Header;