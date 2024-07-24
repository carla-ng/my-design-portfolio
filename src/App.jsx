import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Challenges from './pages/Challenges/Challenges';
import ComponentSystem from './pages/ComponentSystem/ComponentSystem';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/challenges" element={<Challenges />} />
                <Route path="/component-system" element={<ComponentSystem />} />
            </Routes>
        </Layout>
    );
};

export default App;
