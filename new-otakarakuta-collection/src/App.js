import React, { useState, useCallback } from 'react';
import './App.css';
import waferSound from './sounds/wafer-open.mp3';
import stickerSound from './sounds/sticker-reveal.mp3';

// ステッカーの画像一覧
const stickers = [
  '/images/1.png', '/images/2.png', '/images/3.png', '/images/4.png',
  '/images/5.png', '/images/6.png', '/images/7.png', '/images/8.png',
  '/images/9.png', '/images/10.png', '/images/11.png', '/images/12.png',
  '/images/13.png', '/images/14.png', '/images/15.png', '/images/16.png',
  '/images/17.png', '/images/18.png', '/images/19.png', '/images/20.png',
  '/images/21.png', '/images/22.png', '/images/23.png', '/images/24.png'
];

const rarities = [
  '普通★', 'レア★★', 'スーパーレア★★★', 'ウルトラレア★★★★'
];

function App() {
  const [remainingPacks, setRemainingPacks] = useState(10);
  const [isStickerVisible, setStickerVisible] = useState(false);
  const [sticker, setSticker] = useState(null);
  const [rarity, setRarity] = useState('');

  const openWafer = useCallback(() => {
    if (remainingPacks > 0 && !isStickerVisible) {
      const waferAudio = new Audio(waferSound);
      waferAudio.play();

      const randomStickerIndex = Math.floor(Math.random() * stickers.length);
      const randomSticker = stickers[randomStickerIndex];
      const randomRarity = rarities[Math.floor(Math.random() * rarities.length)];

      setSticker(randomSticker);
      setRarity(randomRarity);
      setStickerVisible(true);
      setRemainingPacks(prev => prev - 1);

      const stickerAudio = new Audio(stickerSound);
      setTimeout(() => stickerAudio.play(), 1000);
    }
  }, [remainingPacks, isStickerVisible]);

  const viewStickers = () => {
    alert('手に入れたシール一覧を見る機能は現在開発中です。');
  };

  return (
    <div className="App">
      <h1>今日のウエハースを開けよう！</h1>
      <p>（残りパック数: {remainingPacks}）</p>

      <img 
        src="/images/wafer.png"
        alt="Wafer"
        className={`wafer ${isStickerVisible ? 'open' : ''}`}
        onClick={openWafer}
        style={{ cursor: 'pointer' }}
      />

      {isStickerVisible && sticker && (
        <div className="sticker-container">
          <img src={sticker} alt="Sticker" className="sticker" />
          <p>{rarity}</p>
        </div>
      )}

      <button onClick={openWafer}>ウエハースを開ける</button>
      <button onClick={viewStickers}>手に入れたシール一覧を見る</button>
    </div>
  );
}

export default App;
