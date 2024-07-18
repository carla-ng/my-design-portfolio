import Header from '../Header/Header.jsx';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;
