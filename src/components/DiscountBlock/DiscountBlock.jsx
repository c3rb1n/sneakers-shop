import Banner from './Banner/Banner';
import Carousel from './Carousel/Carousel';
import styles from './DiscountBlock.module.scss';

const DiscountBlock = () => {
    return (
        <section className={styles.discountBlock}>
            <Banner />
            <Carousel />
        </section>
    );
};

export default DiscountBlock;
