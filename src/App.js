	import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [sticker, setSticker] = useState(null);   
  const [stickerVisible, setStickerVisible] = useState(false);   

  const pickRandomSticker = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    const newSticker = { name: `ステッカー${randomNumber}`, rarity: "★ " };
    setSticker(newSticker);     
    setStickerVisible(true);
  };                           
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>                                               
          Edit <code>src/App.js</code> and save to reload.
        </p>                                              
        <button onClick={pickRandomSticker}>ステッカーを取得</button>
        {stickerVisible && sticker && (     
          <div>                        
            <p>{sticker.name}</p>
            <p>レア度: {sticker.rarity}</p>
          </div>
        )}      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"           
          rel="noopener noreferrer"
        >                          
          Learn React
        </a>         
      </header>
    </div>     
  );      
}   
 
export default App;



