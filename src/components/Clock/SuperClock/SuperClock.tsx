import React, {useEffect, useState} from "react";
import { ClockWithHands } from "./clockWithHands/ClockWithHands";
import {AnalogClock} from "./analogClock/AnalogClock";
import {DigitalClock} from "./digitalClock/DigitalClock";
import {Clock} from "../Clock/Clock";

export type ViewType = 'analog' | 'digital' | 'analog2'

export type Props = {
    viewMode?: ViewType

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

    switch (viewMode){
        case 'analog':
            return <AnalogClock date={superClock}/>
        case 'digital':
            return <DigitalClock date={superClock}/>
        case 'analog2':
            return <ClockWithHands date={superClock}/>
        default : return <Clock/>
    }

};


