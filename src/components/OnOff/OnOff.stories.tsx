import {action} from '@storybook/addon-actions';
import {OnOff} from './OnOff';
import {useState} from "react";

export default {
    component: OnOff
}

const onChangeHandler = action('onChange')

export const OnMode = () => {
    return <OnOff value={true} changeOnOff={onChangeHandler}/>
};

export const OffMode = () => {
    return <OnOff value={false} changeOnOff={onChangeHandler}/>
};


export const OnOffMode = () => {
    const [value, setValue] = useState<boolean>(false);
    return <OnOff value={value} changeOnOff={()=>(setValue(!value))}/>
};





