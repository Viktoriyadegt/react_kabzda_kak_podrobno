import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {
    return props.collapsed
        ? <div>
            <AccordionTitle title={props.title}/>
        </div>
        : <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
}

type AccordionTitlePropsType = {
    title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3>{props.title}</h3>
}

type AccordionBodyPropsType = {}

const AccordionBody = (props: AccordionBodyPropsType) => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}