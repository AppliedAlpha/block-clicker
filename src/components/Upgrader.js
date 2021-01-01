import React, { useState } from "react";

const Upgrader = ({ name, price, addBps, buy, buyable }) => {
    const [nowPrice, setNowPrice] = useState(price);

    const onClick = () => {
        if (buyable(nowPrice)) {
            buy(nowPrice, addBps);
            setNowPrice(val => Math.round(val * 1.1));
        }
    };

    return (
        <>
            <div>
                <p>{name}: -{nowPrice} Blocks, +{addBps} BPS</p>
                <button style={{opacity: buyable(nowPrice) ? 1.0 : 0.4}} onClick={onClick}>Buy!</button>
            </div>
        </>
    );
};

export default Upgrader;