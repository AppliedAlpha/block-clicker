import React from "react";
import {formatNumber} from "custom";

const Facility = ({ name, price, addBps, count, buy, buyable }) => {

    const onClick = () => {
        if (buyable(price)) {
            buy(price, name);
        }
    };

    return (
        <>
            <div>
                <p>
                    {name} (Having {count}):
                    -{formatNumber(price, 0)} Blocks,
                    +{formatNumber(addBps, 2)} BPS
                </p>
                <button style={{opacity: buyable(price) ? 1.0 : 0.4}}
                        onClick={onClick}>
                    Buy!
                </button>
            </div>
        </>
    );
};

export default Facility;