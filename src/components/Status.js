import React, {useEffect, useState} from "react";
import {formatNumber, useInterval} from "custom";

const Status = ({ blocks, setBlocks, bpc, bps }) => {
    const [delay, setDelay] = useState(1000);
    const [tickBps, setTickBps] = useState(0);

    // Should be fixed
    useEffect(() => {
        if (bps >= 60) {
            setTickBps(bps / 60);
            setDelay(1000 / 60);
        }
        else if (bps > 0) {
            setTickBps(1);
            setDelay(1000 / bps);
        }
    }, [bps]);

    // Automatic (Blocks Per Second)
    useInterval(() => {
        setBlocks(value => Math.round((value + tickBps) * 10) / 10);
    }, (tickBps > 0 ? delay : null));

    // Manual (Blocks Per Click)
    const onBlockClick = () => {
        setBlocks(value => Math.round((value + bpc) * 10) / 10);
    };

    return (
        <>
            <p>Your Blocks: {formatNumber(blocks, 0)}</p>
            <span onClick={onBlockClick}>
                <button>I'm A Block Button.</button>
            </span>
            <p>Blocks Per Click : {formatNumber(bpc, 1)}</p>
            <p>Blocks Per Second : {formatNumber(bps, 1)}</p>
        </>
    );
};

export default Status;