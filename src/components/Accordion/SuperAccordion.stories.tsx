import {useState} from "react";
import {
    items, SuperAccordion} from "./SuperAccordion";

export default {
    component: SuperAccordion
}

//const onChangeHandler = action('onChange')


export const SuperAccordionDemo = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return <SuperAccordion title={'Menu'}
                           collapsed={collapsed}
                           changeCollapsed={() => {
                               setCollapsed(!collapsed)
                           }}
                           items={items}
    />
};



