import React, { useState } from "react";

const Upgrader = ({ name, price, addBps, buy }) => {
    const [nowPrice, setNowPrice] = useState(price);

    const onClick = () => {
        if (!buy(nowPrice, addBps)) {
            setNowPrice(val => Math.round(val * 1.1));
        }
    };

    return (
        <>
            <div>
                <p>{name}: -{nowPrice} Blocks, +{addBps} BPS</p>
                <button onClick={onClick}>Buy!</button>
            </div>
        </>
    );
};

export default Upgrader;