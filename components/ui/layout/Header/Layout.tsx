import Header from './Header';
import styles from './Layout.module.scss';

const Layout = ({ children }: any) => {
    return (
        <div>
            <Header />
            <main className={styles.main}>{children}</main>
        </div>
    );
}

export default Layout;