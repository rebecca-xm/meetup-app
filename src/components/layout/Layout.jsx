import styles from './Layout.module.scss';
import MainNavBar from './MainNavBar';

const Layout = ({ children }) => {
    return (
        <div>
            <MainNavBar />
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
};

export default Layout;

//Rimuovo MainNavBar da App.JS per importarlo qui.

// A questo punto, posso utilizzare il componente Layout
// per wrappare gli elementi che voglio siano renderizzati.

//* App.js
// <div>
// <Layout>
// {children} => <Routes> ... </Routes>
// </Layout>
// </div>