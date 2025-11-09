import styles from './Layout.module.scss';
import {Outlet} from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <>
            <Header />
            <main className={styles.mainContent}>
                <div className={styles.mainContent__inner}>
                    <Outlet />
                </div>
            </main>
            <div className={styles.bgFigure}></div>
        </>
    );
};

export default Layout;
