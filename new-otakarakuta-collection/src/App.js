// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to Otakarakuta Collection</h1>
                <p>Explore the collection and find your favorite stickers!</p>
            </header>
        </div>
    );
}

function Stickers() {
    const [ownedStickers, setOwnedStickers] = useState([]);

    useEffect(() => {
        const savedStickers = JSON.parse(localStorage.getItem('ownedStickers')) || [];
        setOwnedStickers(savedStickers);
    }, []);

    return (
        <div className="sticker-container">
            {ownedStickers.length > 0 ? (
                ownedStickers.map((sticker, index) => (
                    <div key={index} className="sticker">
                        <img src={sticker.image} alt={`Sticker ${index}`} />
                        <p>{sticker.name}</p>
                    </div>
                ))
            ) : (
                <p>No stickers owned yet. Start your collection!</p>
            )}
        </div>
    );
}

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
