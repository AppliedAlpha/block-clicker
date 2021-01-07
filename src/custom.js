import {useEffect, useRef} from "react";

const formats = [
    {min: 1e6, max: 1e9, name: "Million"},
    {min: 1e9, max: 1e12, name: "Billion"},
    {min: 1e12, max: 1e15, name: "Trillion"},
    {min: 1e15, max: 1e18, name: "Quadrillion"},
    {min: 1e18, max: 1e21, name: "Quintillion"},
    {min: 1e21, max: 1e24, name: "Sextillion"},
    {min: 1e24, max: 1e27, name: "Septillion"},
    {min: 1e27, max: 1e30, name: "Octillion"},
    {min: 1e30, max: 1e33, name: "Nonillion"},
    {min: 1e33, max: 1e36, name: "Decillion"},
    {min: 1e36, max: 1e39, name: "Undecillion"},
];

export const formatNumber = (num, digits) => {
    if (num < 1e6)
        return (Math.round(num * Math.pow(10, digits)) / Math.pow(10, digits))
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