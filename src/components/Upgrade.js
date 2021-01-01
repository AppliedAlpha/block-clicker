import React from "react";
import Upgrader from "components/Upgrader";

const Upgrade = ({ blocksCount, setBlocksCount, setBps }) => {
    const buy = (price, addBps) => {
        setBlocksCount(cnt => cnt - price);
        setBps(val => Math.round((val + addBps) * 10) / 10);
    };

    const buyable = (price) => {
        return blocksCount >= price;
    }

    return (
        <>
            <div>
                <Upgrader name="Hand" price={20} addBps={0.2} buy={buy} buyable={buyable} />
                <Upgrader name="Pickaxe" price={100} addBps={1} buy={buy} buyable={buyable} />
            </div>
        </>
    );
};

export default Upgrade;