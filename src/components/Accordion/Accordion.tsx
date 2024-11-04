import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    changeCollapsed: (collapsed: boolean) => void
}

export const Accordion = (props: AccordionPropsType) => {


    return <div>
        <AccordionTitle title={props.title} collapsed={props.collapsed} changeCollapsed={props.changeCollapsed}/>
        {!props.collapsed && <AccordionBody/>}
    </div>

}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    changeCollapsed: (collapsed: boolean) => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    const onClickHandler = () => props.changeCollapsed(!props.collapsed)
    return <h3 onClick={onClickHandler}>{props.title}</h3>
}

//type AccordionBodyPropsType = {}

const AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}