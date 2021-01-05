import {useEffect, useRef} from "react";

const formats = [
    {min: 1e6, max: 1e9, name: "Million"},
    {min: 1e9, max: 1e12, name: "Billion"},
    {min: 1e12, max: 1e15, name: "Trillion"},
    {min: 1e15, max: 1e18, name: "Quadrillion"},
    {min: 1e18, max: 1e21, name: "Quintillion"},
    {min: 1e21, max: 1e24, name: "Sextillion"},
];

export const formatNumber = (num) => {
    if (num < 1e6)
        return (Math.round(num * 1000) / 1000)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

    return formats.map((format) => {
        if (num >= format.min && num < format.max) {
            return (Math.round((num / format.min) * 1000) / 1000)
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                + " " + format.name;
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