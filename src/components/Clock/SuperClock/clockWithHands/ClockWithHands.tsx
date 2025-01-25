import React from "react";
import s from './ClockWithHands.module.css'

export function ClockWithHands({date}:{date:Date}) {


    const secondsDegrees = ((date.getSeconds() / 60) * 360) + 90;
    const minutesDegrees = ((date.getMinutes() / 60) * 360) + ((date.getSeconds() / 60) * 6) + 90;
    const hoursDegrees = ((date.getHours() / 12) * 360) + ((date.getMinutes() / 60) * 30) + 90;


    return <div className={s.clock}>
        <div className={s.face}>
            <div className={s.number1}>1</div>
            <div className={s.number2}>2</div>
            <div className={s.number3}>3</div>
            <div className={s.number4}>4</div>
            <div className={s.number5}>5</div>
            <div className={s.number6}>6</div>
            <div className={s.number7}>7</div>
            <div className={s.number8}>8</div>
            <div className={s.number9}>9</div>
            <div className={s.number10}>10</div>
            <div className={s.number11}>11</div>
            <div className={s.number12}>12</div>
            <div className={s.hourHand} style={{transform: `rotate(${secondsDegrees}deg)`}}></div>
            <div className={s.minuteHand} style={{transform: `rotate(${minutesDegrees}deg)`}}></div>
            <div className={s.secondHand} style={{transform: `rotate(${hoursDegrees}deg)`}}></div>
        </div>
    </div>
}





