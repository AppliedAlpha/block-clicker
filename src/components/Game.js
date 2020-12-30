import React, { useState } from "react";
import useInterval from "custom";
import Test from "components/Test";

const Game = () => {
    const [blocksCount, setBlocksCount] = useState(0);
    const [delay, setDelay] = useState(1000);
    const [bpc, setBpc] = useState(1);
    const [bps, setBps] = useState(0);
    const [blockTier, setBlockTier] = useState(0);
    // const [imgRoute, setImgRoute] = useState("imgs/0.png");

    // Automatic (Blocks Per Second)
    useInterval(() => {
        setBlocksCount(value => value + bps);
    }, (bps > 0 ? delay : null));

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
            <Test setBpc={setBpc} setBps={setBps} />
        </>
    );
};

export default Game;