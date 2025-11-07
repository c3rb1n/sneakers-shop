import styles from './App.module.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
    return (
        <>
            <div className={styles.bgFigure}></div>
            <Header />
            <Main />
        </>
    );
};

export default App;
