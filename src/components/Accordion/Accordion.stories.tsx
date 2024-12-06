import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';
import {useState} from "react";

export default {
    component: Accordion
}

const onChangeHandler = action('onChange')

export const OpenedAccordion = () => {
    return <Accordion title={'Opened Accordion'}
                      collapsed={false}
                      changeCollapsed={onChangeHandler}/>
};

export const CollapsedAccordion = () => {
    return <Accordion title={'Collapsed Accordion'}
                      collapsed={true}
                      changeCollapsed={onChangeHandler}/>
};

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return <Accordion title={'Accordion'}
                      collapsed={collapsed}
                      changeCollapsed={() => {
                          setCollapsed(!collapsed)
                      }}/>
};



