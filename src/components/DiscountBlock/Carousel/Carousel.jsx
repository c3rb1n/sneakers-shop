import Button from '../../common/Button/Button';
import Discount from '../../common/Discount/Discount';
import styles from './Carousel.module.scss';

const Carousel = () => {
    return (
        <section className={styles.carousel}>
            <div className={styles.carousel__inner}>
                <button className={styles.carousel__btn}>{'<'}</button>
                <div className={styles.carousel__imgContainer}>
                    <img className={styles.carousel__img} src="/sneakers/basketball-m-1.png" alt="sneakers" height={200} width={350} />
                    <div className={styles.carousel__textBlock}>
                        <h2 className={styles.carousel__title}>
                            Raven‑RB01 — Кроссовки для тех, кто диктует темп на площадке.
                        </h2>
                        <p className={styles.carousel__description}>
                            Усиленная амортизация поглощает удары при прыжках и резких остановках,
                            а жёсткий задник надёжно фиксирует голеностоп. Прочная резиновая подошва с
                            агрессивным протектором обеспечивает надёжное сцепление — ни один рывок
                            не пройдёт впустую.
                        </p>
                        <Discount cn={styles.carousel__discount} />
                    </div>
                    <Button cn={styles.carousel__buyBtn} btnText="Купить" />
                </div>
                <button className={styles.carousel__btn}>{'>'}</button>
            </div>
        </section>
    );
};

export default Carousel;
