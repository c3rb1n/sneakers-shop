import styles from './Header.module.scss';
import Menu from '../common/Menu/Menu';
import HeaderTitleBlock from './HeaderTitleBlock/HeaderTitleBlock';

const Header = () => (
    <header className={styles.header}>
        <HeaderTitleBlock />
        <Menu />
    </header>
);

export default Header;
