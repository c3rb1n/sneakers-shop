import styles from './App.module.scss';
import Header from './components/Header/Header';

const App = () => {
    return (
        <>
            <div className={styles.bgFigure}></div>
            <Header />
        </>
    );
};

export default App;
