import styles from './Discount.module.scss';

const Discount = ({cn}) => {
    return (
        <div className={`${styles.discount} ${cn ? cn : ''}`}>
            <h3 className={styles.discount__inner}>
                <div className={styles.discount__value}>
                    <span>Скидка</span>
                    <span>30%</span>
                </div>
                <div className={styles.discount__prices}>
                    <div className={styles.discount__oldPrice}>14 999 руб.</div>
                    -
                    <div className={styles.discount__newPrice}>10 499 руб.</div>
                </div>
            </h3>
        </div>
    );
};

export default Discount;
