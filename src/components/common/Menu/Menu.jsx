import styles from './Menu.module.scss';
import CartIcon from '../Icons/CartIcon/CartIcon';
import HeartIcon from '../Icons/HeartIcon/HeartIcon';
import HomeIcon from '../Icons/HomeIcon/HomeIcon';
import ProfileIcon from '../Icons/ProfileIcon/ProfileIcon';

const Menu = () => {
    const menuItems = [
        {id: 1, itemLogo: <HomeIcon cn={styles.menu__logo} />, itemText: 'Главная'},
        {id: 2, itemLogo: <CartIcon cn={styles.menu__logo} />, itemText: '1205 руб.'},
        {id: 3, itemLogo: <HeartIcon cn={styles.menu__logo} />, itemText: 'Избранное'},
        {id: 4, itemLogo: <ProfileIcon cn={styles.menu__logo} />, itemText: 'Профиль'},
    ];

    return (
        <div className={styles.menu}>
            {menuItems.map(menuItem => (
                <div className={styles.menu__item} key={menuItem.id}>
                    {menuItem.itemLogo}
                    <span>{menuItem.itemText}</span>
                </div>
            ))}
        </div>
    );
};

export default Menu;
