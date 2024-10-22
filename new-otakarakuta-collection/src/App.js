// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Stickers from './pages/stickers';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/stickers" element={<Stickers />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
