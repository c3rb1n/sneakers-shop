import styles from './Main.module.scss';
import DiscountBlock from '../DiscountBlock/DiscountBlock';

const Main = () => {
    return (
        <main className={styles.mainContent}>
            <div className={styles.mainContent__inner}>
                <DiscountBlock />
            </div>
        </main>
    );
};

export default Main;
