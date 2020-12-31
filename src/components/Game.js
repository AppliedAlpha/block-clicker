import React, { useEffect, useState } from "react";
import useInterval from "custom";
import Test from "components/Test";
import Upgrade from "components/Upgrade";

const Game = () => {
    const [blocksCount, setBlocksCount] = useState(0);
    const [delay, setDelay] = useState(1000);
    const [bpc, setBpc] = useState(1);
    const [bps, setBps] = useState(0);
    const [tickBps, setTickBps] = useState(0);
    const [blockTier, setBlockTier] = useState(0);
    // const [imgRoute, setImgRoute] = useState("imgs/0.png");

    useEffect(() => {
        if (bps >= 60) {
            setTickBps(Math.round(bps / 60));
            setDelay(1000 / 60);
        }
        else if (bps > 0) {
            setTickBps(1);
            setDelay(1000 / bps);
        }
    }, [bps]);

    // Automatic (Blocks Per Second)
    useInterval(() => {
        setBlocksCount(value => Math.round((value + tickBps) * 10) / 10);
    }, (tickBps > 0 ? delay : null));

    // Manual (Blocks Per Click)
    const onBlockClick = () => {
        setBlocksCount(value => value + bpc);
    };

    return (
        <>
            <p>Your Blocks: {blocksCount}</p>
            <span onClick={onBlockClick}>
                <button>I'm A Block Button.</button>
            </span>
            <p>Blocks Per Click : {bpc}</p>
            <p>Blocks Per Second : {bps}</p>
            <Upgrade blocksCount={blocksCount} setBlocksCount={setBlocksCount} setBps={setBps} />
            <p></p>
            <Test setBpc={setBpc} setBps={setBps} />
        </>
    );
};

export default Game;