import {action} from '@storybook/addon-actions';
import {OnOff} from './OnOff';
import {useState} from "react";
import {UnControlledOnOff} from "./UnControlledOnOff";

export default {
    component: UnControlledOnOff
}

const onChangeHandler = action('onChange')

export const UnControlledOnOffDemo = () => {
    return <UnControlledOnOff/>
};






