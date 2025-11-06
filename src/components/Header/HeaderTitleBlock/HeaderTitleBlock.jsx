import styles from './HeaderTitleBlock.module.scss';
import RavenIcon from '../../common/Icons/RavenIcon/RavenIcon';

const HeaderTitleBlock = () => (
    <div className={styles.headerTitleBlock}>
        <RavenIcon />
        <div className={styles.headerTitleBlock__info}>
            <h1 className={styles.headerTitleBlock__title}>RAVEN SNEAKERS</h1>
            <div className={styles.headerTitleBlock__description}>Магазин лучших кроссовок</div>
        </div>
    </div>
);

export default HeaderTitleBlock;
