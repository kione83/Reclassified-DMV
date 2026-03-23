import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Jobs from './pages/Jobs';
import Events from './pages/Events';
import Forums from './pages/Forums';
import NotFound from './pages/NotFound';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/"        element={<Home />} />
            <Route path="/feed"    element={<Feed />} />
            <Route path="/jobs"    element={<Jobs />} />
            <Route path="/events"  element={<Events />} />
            <Route path="/forums"  element={<Forums />} />
            <Route path="*"        element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
