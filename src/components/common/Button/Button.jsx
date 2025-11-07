import styles from './Button.module.scss';

const Button = ({cn, btnText}) => {
    return (
        <button className={`${styles.button} ${cn ? cn : ''}`}>{btnText}</button>
    );
};

export default Button;
