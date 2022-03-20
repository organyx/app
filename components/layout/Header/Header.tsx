import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Jobs</div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>All Jobs</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;