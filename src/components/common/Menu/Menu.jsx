import styles from './Menu.module.scss';
import CartIcon from '../Icons/CartIcon/CartIcon';
import HeartIcon from '../Icons/HeartIcon/HeartIcon';
import HomeIcon from '../Icons/HomeIcon/HomeIcon';
import ProfileIcon from '../Icons/ProfileIcon/ProfileIcon';
import {NavLink} from 'react-router-dom';

const Menu = () => {
    const menuItems = [
        {id: 1, to: '/', itemLogo: <HomeIcon cn={styles.menu__logo} />, itemText: 'Главная'},
        {id: 2, to: '/cart', itemLogo: <CartIcon cn={styles.menu__logo} />, itemText: '1205 руб.'},
        {id: 3, to: '/favourites', itemLogo: <HeartIcon cn={styles.menu__logo} />, itemText: 'Избранное'},
        {id: 4, to: '/profile', itemLogo: <ProfileIcon cn={styles.menu__logo} />, itemText: 'Профиль'},
    ];

    return (
        <div className={styles.menu}>
            {menuItems.map(menuItem => (
                <NavLink
                    className={({isActive}) => `${styles.menu__item} ${isActive ? styles.menu__item_active : ''}`}
                    to={menuItem.to}
                    key={menuItem.id}
                >
                    {menuItem.itemLogo}
                    <span>{menuItem.itemText}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default Menu;
