import React, { useState } from "react";
import {formatNumber} from "custom";

const Facility = ({ name, price, addBps, buy, buyable }) => {
    const [nowPrice, setNowPrice] = useState(price);
    const [count, setCount] = useState(0);

    const onClick = () => {
        if (buyable(nowPrice)) {
            buy(nowPrice, addBps);
            setNowPrice(val => Math.round(val * 1.15));
            setCount(val => val + 1);
        }
    };

    return (
        <>
            <div>
                <p>
                    {name} (Having {count}):
                    -{formatNumber(nowPrice)} Blocks,
                    +{formatNumber(addBps)} BPS
                </p>
                <button style={{opacity: buyable(nowPrice) ? 1.0 : 0.4}}
                        onClick={onClick}>
                    Buy!
                </button>
            </div>
        </>
    );
};

export default Facility;