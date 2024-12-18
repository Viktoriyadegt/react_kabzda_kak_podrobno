import React, {useState} from "react";

import {action} from "@storybook/addon-actions";
import {MySelect_1} from "./MySelect_1";


export default {
    component: MySelect_1
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

    return <MySelect_1 items={items} value={value} onChange={setValue}/>
};


