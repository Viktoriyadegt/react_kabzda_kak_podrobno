import {SuperClock, ViewType} from "./SuperClock";
import {useState} from "react";
import s from './Button.module.css'

export default {}


export const SuperClockExample = () => {

    let [viewMode, setViewMode] = useState<ViewType>("digital")

    return <div className={s.box1}>
        <SuperClock viewMode={viewMode}/>
        <div className={s.box2}>
            <button className={s.button} onClick={() => setViewMode('digital')}>Clock 1</button>
            <button className={s.button} onClick={() => setViewMode('analog')}>Clock 2</button>
            <button className={s.button} onClick={() => setViewMode('analog2')}>Clock 3</button>
        </div>

    </div>


};

