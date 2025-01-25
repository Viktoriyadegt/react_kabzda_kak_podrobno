import React, {useEffect, useState} from "react";

const get2DigitFormat = (num: number) => num < 10 ? '0' + num : num

export const Clock = () => {

    let [clock, setClock] = useState(new Date())

    useEffect(() => {

        const setIntervalId = setInterval(() => {
            setClock(new Date())
        }, 1000)
        return () => {
            clearInterval(setIntervalId)
        }
    }, [])

    return <div style={{fontSize: '80px', color: 'darkblue'}}>

        <span>{get2DigitFormat(clock.getHours())}</span>
        :
        <span>{get2DigitFormat(clock.getMinutes())}</span>
        :
        <span>{get2DigitFormat(clock.getSeconds())}</span>
    </div>
};
