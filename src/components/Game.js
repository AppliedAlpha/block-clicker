import React, {useState} from "react";
import Facilities from "components/Facilities";
import Status from "components/Status";
import "css/style.css";

const Game = () => {
    let facilities = [
        {name: "Hand", price: 15, bps: 0.1, count: 0, multiplier: 1},
        {name: "Pickaxe", price: 100, bps: 1, count: 0, multiplier: 1},
        {name: "Shovel", price: 1100, bps: 8, count: 0, multiplier: 1},
        {name: "Axe", price: 12000, bps: 47, count: 0, multiplier: 1},
        {name: "Sword", price: 130000, bps: 260, count: 0, multiplier: 1},
        {name: "Farm", price: 1.4e6, bps: 1400, count: 0, multiplier: 1},
        {name: "Village", price: 20e6, bps: 7800, count: 0, multiplier: 1},
        {name: "Portal", price: 330e6, bps: 44000, count: 0, multiplier: 1},
        {name: "Fortress", price: 5.1e9, bps: 260000, count: 0, multiplier: 1},
        {name: "Stronghold", price: 75e9, bps: 1.6e6, count: 0, multiplier: 1},
        {name: "End World", price: 1e12, bps: 10e6, count: 0, multiplier: 1},
        {name: "Outer World", price: 14e12, bps: 65e6, count: 0, multiplier: 1},
        {name: "Forge", price: 170e12, bps: 430e6, count: 0, multiplier: 1},
        {name: "Extra Mods", price: 2.415e15, bps: 2.9e9, count: 0, multiplier: 1},
        {name: "Server Executor", price: 26e15, bps: 21e9, count: 0, multiplier: 1},
        {name: "Multi Engine", price: 310e15, bps: 150e9, count: 0, multiplier: 1},
        {name: "Java Console", price: 0, bps: 0, count: 0, multiplier: 1},
        {name: "Integrated Computer", price: 0, bps: 0, count: 0, multiplier: 1},
    ];

    const [blocks, setBlocks] = useState(5e7);
    const [bpc, setBpc] = useState(1);
    const [bps, setBps] = useState(0);
    const [fc, setFc] = useState(facilities);

    return (
        <>
            <Status
                blocks={blocks}
                setBlocks={setBlocks}
                bpc={bpc}
                bps={bps}
            />
            <Facilities
                blocks={blocks}
                setBlocks={setBlocks}
                setBpc={setBpc}
                setBps={setBps}
                fc={fc}
                setFc={setFc}
            />
        </>
    );
};

export default Game;