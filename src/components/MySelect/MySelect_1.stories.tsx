import React, {useState} from "react";

import {MySelect1} from "./MySelect1";


export default {
    component: MySelect1
}

//const onChangeHandler = action('onChange')

const items = [
    {value: '1', title: 'Grodno'},
    {value: '2', title: 'Minsk'},
    {value: '3', title: 'Gomel'},
    {value: '4', title: 'Vitebsk'},
]


export const MySelect = () => {
    const [value, setValue] = useState('2')


    return <MySelect1 items={items} value={value} onChange={setValue}/>
};


