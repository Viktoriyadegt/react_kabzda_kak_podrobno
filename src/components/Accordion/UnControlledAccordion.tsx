import React, {useState} from 'react';


type UnControlledAccordionPropsType = {
    title: string

}

export const UnControlledAccordion = (props: UnControlledAccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(false);

    const styledButton = {
        width: '50px',
        height: '20px',
        display: 'inline-block',
        backgroundColor: 'pink',
        border: '0.5px solid black',
        cursor: 'pointer'
    }

    return <div>
        <AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>
        {collapsed && <AccordionBody/>}
    </div>

}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={()=>props.onClick()}>{props.title}</h3>
}

type AccordionBodyPropsType = {}

const AccordionBody = (props: AccordionBodyPropsType) => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
