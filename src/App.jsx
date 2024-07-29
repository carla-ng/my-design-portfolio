import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Challenges from './pages/Challenges/Challenges';
import ComponentSystem from './pages/ComponentSystem/ComponentSystem';
import ChallengeDetail from './pages/ChallengeDetail/ChallengeDetail';


const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/challenges" element={<Challenges />} />
                <Route path="/challenges/:challengeId" element={<ChallengeDetail />} />
                <Route path="/component-system" element={<ComponentSystem />} />
            </Routes>
        </Layout>
    );
};

export default App;
