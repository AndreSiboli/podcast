import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Navbar.module.scss';

import Links from '../styles/links/Links';
import LinkButton from '../styles/buttons/LinkButton';
import Container from '../styles/Container';

export default function Navbar() {
    const [active, setActive] = useState(false);
    const [hiddenNav, setHiddenNav] = useState(false);
    const [isTopNav, setIsTopNav] = useState(true);
    const [currentPage, setCurrentPage] = useState('');
    const [currentScroll, setCurrentScroll] = useState(0);

    const { pathname } = useLocation();

    function handleMenu() {
        setActive(!active);
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && active) handleMenu();
        });
    });

    useEffect(() => {
        const path = pathname.endsWith('/')
            ? pathname.substring(0, pathname.length - 1)
            : pathname;
        setCurrentPage(path);
        if (active) handleMenu();
    }, [pathname]);

    useEffect(() => {
        window.addEventListener('scroll', function cancel() {
            const scroll = window.pageYOffset;

            if (scroll <= 200) setIsTopNav(true);
            else setIsTopNav(false);

            if (window.innerWidth <= 768 && active) {
                setHiddenNav(false);
                return;
            }

            if (scroll >= currentScroll) {
                setHiddenNav(true);
                setCurrentScroll(scroll);
                return;
            }

            setHiddenNav(false);
            this.removeEventListener('scroll', cancel);
        });
    }, [currentScroll]);

    const colorPage =
        currentPage === '/podcast' || currentPage === '/podcast/about'
            ? 'blueish'
            : 'white';
    const visibilityNav = hiddenNav ? 'hidden' : '';
    const topNav = !isTopNav ? 'nonTop' : '';

    return (
        <header
            className={`${styles.header} ${styles[colorPage]} ${styles[visibilityNav]} ${styles[topNav]}`}
        >
            <Container customClass="spacing">
                <div className={styles.headerLogo}>
                    <Link to="/podcast">
                        <h1>Sundew Podcast</h1>
                    </Link>

                    <div
                        className={
                            active
                                ? `${styles.headerMenu} ${styles.activeMenu}`
                                : styles.headerMenu
                        }
                        onClick={handleMenu}
                    >
                        <div className={styles.hamburger}>
                            <span className={styles.trace}></span>
                            <span className={styles.trace}></span>
                        </div>
                    </div>
                </div>

                <nav
                    className={
                        active
                            ? `${styles.headerNavigation} ${styles.active}`
                            : styles.headerNavigation
                    }
                >
                    <div className={styles.headerLinks}>
                        <Links
                            to="episodes"
                            text="Episódios"
                            currentPage={currentPage}
                            active={active}
                        />
                        <Links
                            to="about"
                            text="Sobre o programa"
                            currentPage={currentPage}
                            active={active}
                        />
                    </div>
                    <div className={styles.headerSign}>
                        <LinkButton
                            to="sign"
                            text="Assine"
                            customClass={
                                (currentPage === '/podcast' ||
                                    currentPage === '/podcast/about') &&
                                !active
                                    ? 'beige'
                                    : 'black'
                            }
                        />
                    </div>
                </nav>
            </Container>
        </header>
    );
}
