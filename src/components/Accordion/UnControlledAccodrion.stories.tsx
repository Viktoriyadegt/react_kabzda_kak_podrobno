import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';
import {useState} from "react";
import {UnControlledAccordion} from "./UnControlledAccordion";

export default {
    component: UnControlledAccordion
}

export const UnControlledAccordionDemo = () => {

    return <UnControlledAccordion title={'Accordion'}/>
};





