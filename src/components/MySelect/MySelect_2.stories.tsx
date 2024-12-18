import React, {useState} from "react";
import {MySelect2} from "./MySelect_2";
import {action} from "@storybook/addon-actions";


export default {
    component: MySelect2
}

//const onChangeHandler = action('onChange')

const items = [
    {value: '1', title: 'Grodno'},
    {value: '2', title: 'Minsk'},
    {value: '3', title: 'Gomel'},
    {value: '4', title: 'Vitebsk'},
]


export const MySelect_2 = () => {
    const [value, setValue] = useState('')

    return <MySelect2 items={items} value={'3'} onChange={action('Value changed')}/>
};


