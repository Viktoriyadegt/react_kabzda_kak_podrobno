import React, {useMemo, useState} from "react";

import {MySelect1} from "./MySelect1";
import s from './MySelect_1.module.css'


export default {
    component: MySelect1
}

//const onChangeHandler = action('onChange')

type ItemsType = CityType[]
type CityType = { value: string, title: string, counterId: number }

const items: ItemsType = [
    {value: '1', title: 'Grodno', counterId: 1},
    {value: '2', title: 'Minsk', counterId: 1},
    {value: '3', title: 'Gomel', counterId: 1},
    {value: '4', title: 'Vitebsk', counterId: 1},
    {value: '5', title: 'Barcelona', counterId: 2},
    {value: '6', title: 'Valencia', counterId: 2},
    {value: '7', title: 'Madrid', counterId: 2},
    {value: '8', title: 'Rome', counterId: 3},
    {value: '9', title: 'Florence', counterId: 3},
    {value: '10', title: 'Alessandria', counterId: 3},
]
const Countries = {
    'Italy': 3,
    'Spain': 2,
    'Belarus': 1
}


export const Example1 = () => {
    console.log('Example1')
    const [value1, setValue1] = useState('5')
    const [value2, setValue2] = useState('2')
    const [value3, setValue3] = useState('1')
    const [count, setCount] = useState(0)

    const citiesInSpain = useMemo(() => items.filter(city => city.counterId === Countries.Spain), [items])
    const citiesStartingWithTheLetterM = useMemo(() => items.filter(city => city.title[0] === 'M'), [items])
    const citiesLongerThan5Letters = useMemo(() => items.filter(city => city.title.length > 5), [items])

    const counter = () => {
        console.log('count')
        return setCount(count + 1)
    }

    return <div className={s.divSelect}>
        <div><MySelect1 items={citiesInSpain} value={value1} onChange={setValue1}/></div>
        <div><MySelect1 items={citiesStartingWithTheLetterM} value={value2} onChange={setValue2}/></div>
        <div><MySelect1 items={citiesLongerThan5Letters} value={value3} onChange={setValue3}/></div>
        <div className={s.count}>
            <button onClick={counter}>+</button>
            {count}
        </div>

    </div>
};




