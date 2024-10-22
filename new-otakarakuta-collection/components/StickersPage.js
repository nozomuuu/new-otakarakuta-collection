import { useState, useEffect } from 'react';

function StickersPage() {
    const [stickers, setStickers] = useState([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setStickers(['Sticker 1', 'Sticker 2', 'Sticker 3']);
        }
    }, []);

    if (!stickers.length) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Stickers</h1>
            <ul>
                {stickers.map((sticker, index) => (
                    <li key={index}>{sticker}</li>
                ))}
            </ul>
        </div>
    );
}

export default StickersPage;
