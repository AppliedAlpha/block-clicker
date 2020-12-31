import React from "react";
import Upgrader from "components/Upgrader";

const Upgrade = ({ blocksCount, setBlocksCount, setBps }) => {
    const buy = (price, addBps) => {
        if (blocksCount >= price) {
            setBlocksCount(cnt => cnt - price);
            setBps(val => Math.round((val + addBps) * 10) / 10);
            return 0;
        }
        else {
            window.alert("Block is not enough!");
            return 1;
        }
    };

    return (
        <>
            <div>
                <Upgrader name="Hand" price={20} addBps={0.2} buy={buy} />
                <Upgrader name="Pickaxe" price={100} addBps={1} buy={buy} />
            </div>
        </>
    );
};

export default Upgrade;