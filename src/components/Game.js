import React, {useState} from "react";
import Facilities from "components/Facilities";
import Status from "components/Status";

const Game = () => {
    const [blocks, setBlocks] = useState(0);
    const [bpc, setBpc] = useState(1);
    const [bps, setBps] = useState(0);

    return (
        <>
            <Status blocks={blocks} setBlocks={setBlocks} bpc={bpc} bps={bps} />
            <Facilities blocks={blocks} setBlocks={setBlocks} setBps={setBps} />
        </>
    );
};

export default Game;