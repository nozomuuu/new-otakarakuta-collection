import React, { useEffect, useState } from 'react';

const StickersPage = () => {
    const [stickersCollected, setStickersCollected] = useState([]);

    useEffect(() => {
        // ローカルストレージからシールのデータを取得
        const collected = JSON.parse(localStorage.getItem('stickers')) || [];
        setStickersCollected(collected);
    }, []);

    return (
      <div>
        <h1>手に入れたシール</h1>
        <div>
          {stickers.map(sticker => (
            <div key={sticker.id}>
              <img src={sticker.image} alt={sticker.name} />
              <p>{sticker.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
    

export default StickersPage;
const stickers = [
  { id: 1, name: "Sticker No. 1", image: "images/1.png" },
  { id: 2, name: "Sticker No. 2", image: "images/2.png" },
  { id: 3, name: "Sticker No. 3", image: "images/3.png" },
  { id: 4, name: "Sticker No. 4", image: "images/4.png" },
  { id: 5, name: "Sticker No. 5", image: "images/5.png" },
  { id: 6, name: "Sticker No. 6", image: "images/6.png" }, 
  { id: 7, name: "Sticker No. 7", image: "images/7.png" },
  { id: 8, name: "Sticker No. 8", image: "images/8.png" },
  { id: 9, name: "Sticker No. 9", image: "images/9.png" },
  { id: 10, name: "Sticker No. 10", image: "images/10.png" },
  { id: 11, name: "Sticker No. 11", image: "images/11.png" },
  { id: 12, name: "Sticker No. 12", image: "images/12.png" },
  { id: 13, name: "Sticker No. 13", image: "images/13.png" },
  { id: 14, name: "Sticker No. 14", image: "images/14.png" },
  { id: 15, name: "Sticker No. 15", image: "images/15.png" },
  { id: 16, name: "Sticker No. 16", image: "images/16.png" },
  { id: 17, name: "Sticker No. 17", image: "images/17.png" },
  { id: 18, name: "Sticker No. 18", image: "images/18.png" }, 
  { id: 19, name: "Sticker No. 19", image: "images/19.png" },
  { id: 20, name: "Sticker No. 20", image: "images/20.png" },
  { id: 21, name: "Sticker No. 21", image: "images/21.png" },
  { id: 22, name: "Sticker No. 22", image: "images/22.png" },
  { id: 23, name: "Sticker No. 23", image: "images/23.png" },
  { id: 24, name: "Sticker No. 24", image: "images/24.png" },
];

