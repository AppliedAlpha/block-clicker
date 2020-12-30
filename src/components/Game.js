import React, { useState } from "react";

const Game = () => {
    const [blocksCount, setBlocksCount] = useState(0);

    const onClick = () => {
        setBlocksCount(blocksCount + 1);
    };

    return (
        <>
            <p>Your Blocks: {blocksCount}</p>
            <span onClick={onClick}>Hi</span>
        </>
    );
};

export default Game;