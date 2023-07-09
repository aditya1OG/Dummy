import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';

export const links = [
    {
        id: 1,
        title: "Home",
        url: "/home"
    },
    {
        id: 2,
        title: "Live",
        url: "/live",
    },
    {
        id: 3,
        title: "Search",
        url: "/search",
    },
    {
        id: 4,
        title: "Posts",
        url: "/posts",
    },
];
const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.detrator}>
                DETRACTOR
            </Link>
            <div className={styles.links}>
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={styles.link}>
                        {link.title}
                    </Link>
                ))}
                <button className={styles.logout}>
                    Logout
                </button>
            </div>
        </div>
    )
}
export default Navbar;