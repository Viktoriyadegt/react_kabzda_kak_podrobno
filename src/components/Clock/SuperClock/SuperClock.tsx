import React, {useEffect, useState} from "react";
import { ClockWithHands } from "./ClockWithHands";

const get2DigitFormat = (num: number) => num < 10 ? '0' + num : num

function setRotation(element: any, degrees: any) {
    // Set the rotation and add 90 to default from 12am
    element.style.transform = `rotate(${degrees + 90}deg)`;

}

const secondsElement = document.querySelector('.second');
const minutesElement = document.querySelector('.minute');
const hoursElement = document.querySelector('.hour');


export type Props = {
    viewMode?: boolean
}

export const SuperClock = ({viewMode}: Props) => {

    let [superClock, setSuperClock] = useState(new Date())



    useEffect(() => {

        const setIntervalId = setInterval(() => {

            setSuperClock(new Date())

        }, 1000)

        return () => {

            clearInterval(setIntervalId)
        }

    }, [])




    return viewMode ?
        <div style={{fontSize: '80px', color: 'darkblue'}}>

            <span>{get2DigitFormat(superClock.getHours())}</span>
            :
            <span>{get2DigitFormat(superClock.getMinutes())}</span>
            :
            <span>{get2DigitFormat(superClock.getSeconds())}</span>
        </div>

        : <ClockWithHands  />

};


/*const secondsElement = document.querySelector('.second');
const minutesElement = document.querySelector('.minute');
const hoursElement = document.querySelector('.hour');*/

