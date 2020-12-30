import React from "react";

const max = (val1, val2) => { return val1 > val2 ? val1 : val2 };

const Test = ({setBpc, setBps}) => {
    const increaseBpc = () => {
        setBpc(bpc => bpc + 1);
    };

    const increaseBps = () => {
        setBps(bps => bps + 1);
    };

    const decreaseBpc = () => {
        setBpc(bpc => max(bpc - 1, 0));
    };

    const decreaseBps = () => {
        setBps(bps => max(bps - 1, 0));
    };

    return (
        <>
            <button onClick={increaseBpc}>Increase BPC</button>
            <button onClick={increaseBps}>Increase BPS</button>
            <button onClick={decreaseBpc}>Decrease BPC</button>
            <button onClick={decreaseBps}>Decrease BPS</button>
        </>
    );
};

export default Test;