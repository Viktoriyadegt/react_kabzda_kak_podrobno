import React from "react";
import s from '../Button.module.css'
const get2DigitFormat = (num: number) => num < 10 ? '0' + num : num



export const DigitalClock = ({date}: { date:Date }) => {

    return <div className={s.box3} style={{fontSize: '150px', color: 'darkslateblue'}}>

        <span>{get2DigitFormat(date.getHours())}</span>
        :
        <span>{get2DigitFormat(date.getMinutes())}</span>
        :
        <span>{get2DigitFormat(date.getSeconds())}</span>
    </div>


};


