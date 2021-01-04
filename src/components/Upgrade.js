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

    const upgraders = [
        {name: "Hand", price: 15, bps: 0.1},
        {name: "Pickaxe", price: 100, bps: 1},
        {name: "Shovel", price: 1100, bps: 8},
        {name: "Axe", price: 12000, bps: 47},
        {name: "Sword", price: 130000, bps: 260},
        {name: "Farm", price: 1400000, bps: 1400},
        {name: "Village", price: 2e7, bps: 7800},
        {name: "Portal", price: 3.3e8, bps: 44000},
        {name: "Fortress", price: 5.1e9, bps: 260000},
    ];

    return (
        <>
            <div>
                {upgraders.map(upgrader =>
                    <Upgrader name={upgrader.name}
                              price={upgrader.price}
                              addBps={upgrader.bps}
                              buy={buy}
                              buyable={buyable}
                    />
                )}
            </div>
        </>
    );
};

export default Upgrade;