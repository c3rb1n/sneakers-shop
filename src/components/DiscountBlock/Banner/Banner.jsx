import styles from './Banner.module.scss';
import Button from '../../common/Button/Button';
import Discount from '../../common/Discount/Discount';

const Banner = () => {
    return (
        <>
            <section className={styles.banner}>
                <div className={styles.banner__inner}>
                    <p className={styles.banner__description}>Мужские баскетбольные кроссовки</p>
                    <h2 className={styles.banner__title}>Raven-RB01</h2>
                    <Discount />
                    <Button btnText="Купить" />
                </div>
            </section>
        </>
    );
};

export default Banner;
