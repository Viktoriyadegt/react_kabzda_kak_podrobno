import {SuperClock} from "./SuperClock";
import {useState} from "react";
import s from './Button.module.css'

export default {}


export const SuperClockExample = () => {

    let [viewMode, setViewMode] = useState(true)

    return <>
        <SuperClock viewMode={viewMode}/>
        <button className={s.button} onClick={() => setViewMode(!viewMode)}>Clock</button>
    </>


};

