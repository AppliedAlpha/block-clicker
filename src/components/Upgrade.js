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

    // e6 = M, e9 = B, e12 = T, e15 = Qa,
    // e18 = Qi, e21 = Sx, e24 = Sp ...
    const upgraders = [
        {name: "Hand", price: 15, bps: 0.1},
        {name: "Pickaxe", price: 100, bps: 1},
        {name: "Shovel", price: 1100, bps: 8},
        {name: "Axe", price: 12000, bps: 47},
        {name: "Sword", price: 130000, bps: 260},
        {name: "Farm", price: 1.4e6, bps: 1400},
        {name: "Village", price: 20e6, bps: 7800},
        {name: "Portal", price: 330e6, bps: 44000},
        {name: "Fortress", price: 5.1e9, bps: 260000},
        {name: "Stronghold", price: 75e9, bps: 1.6e6},
        {name: "End World", price: 1e12, bps: 10e6},
        {name: "Outer World", price: 14e12, bps: 65e6},
        {name: "Forge", price: 170e12, bps: 430e6},
        {name: "Extra Mods", price: 2.415e15, bps: 2.9e9},
        {name: "Server Executor", price: 26e15, bps: 21e9},
        {name: "Multi Engine", price: 310e15, bps: 150e9},
        {name: "Java Console", price: 0, bps: 0},
        {name: "Integrated Computer", price: 0, bps: 0},
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