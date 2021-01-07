import React from "react";
import Facility from "components/Facility";

const Facilities = ({ blocks, setBlocks, setBpc, setBps, fc, setFc }) => {
    // const [currentBpc, setCurrentBpc] = useState(1);
    // const [currentBps, setCurrentBps] = useState(0);
    let currentBps = 0;

    const updateBps = () => {
        currentBps = 0;
        fc.forEach(element => {
            let add = element.bps * element.count * element.multiplier;
            // setCurrentBps(val => val + add);
            currentBps += add;
        });
        setBps(currentBps);
    }

    const buy = (price, name) => {
        setBlocks(cnt => cnt - price);
        let currentFc = fc;
        let index = currentFc.findIndex(obj => obj.name === name);
        currentFc[index].count += 1;
        setFc(currentFc);
        updateBps();
    };

    const buyable = (price) => {
        return blocks >= price;
    }

    return (
        <>
            <div>
                {fc.map(obj =>
                    <Facility name={obj.name}
                              price={Math.round(
                                  obj.price *
                                  Math.pow(1.15, obj.count)
                              )}
                              addBps={Math.round(
                                  (obj.bps * obj.multiplier * 100) / 100
                              )}
                              count={obj.count}
                              buy={buy}
                              buyable={buyable}
                    />
                )}
            </div>
        </>
    );
};

export default Facilities;