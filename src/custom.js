import {useEffect, useRef} from "react";

export const fixedNumber = (num, digits) => {
    return num.toFixed(digits)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

const formats = [
    {min: 1e6, max: 1e9, name: "Million"},
    {min: 1e9, max: 1e12, name: "Billion"},
    {min: 1e12, max: 1e15, name: "Trillion"},
    {min: 1e15, max: 1e18, name: "Quadrillion"},
    {min: 1e18, max: 1e21, name: "Quintillion"},
    {min: 1e21, max: 1e24, name: "Sextillion"},
];

export const formatNumber = (num, digits) => {
    if (num < 1e6)
        return num.toPrecision(digits)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            .toString();

    return formats.map((format) => {
        if (num >= format.min && num < format.max) {
            return (num / format.min).toFixed(3)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                .toString() + " " + format.name;
        }
    });
};

export const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};