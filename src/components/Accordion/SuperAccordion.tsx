import React from "react";

type ItemType = {
    title: string
    value: string
}
type AccordionPropsType = {
    title: string
    collapsed: boolean
    changeCollapsed: (collapsed: boolean) => void
    items: ItemType[]
}

export const items: ItemType[] = [{title: 'potato', value: '1'}, {title: 'tomato', value: '2'}, {
    title: 'fish',
    value: '3'
}]

export const SuperAccordion = (props: AccordionPropsType) => {


    return <div>
        <AccordionTitle title={props.title} collapsed={props.collapsed} changeCollapsed={props.changeCollapsed}/>
        {!props.collapsed && <AccordionBody items={items}/>}
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


type AccordionBodyPropsType = {
    items: ItemType[]
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    return <ul>
        {props.items.map((item, index) => {
            const onClickHandler = () => {
                alert(`element with ID ${item.value} was selected`)
            }
            return <div>
                <li key={index} onClick={onClickHandler}>{item.title}</li>
            </div>
        })
        }
    </ul>
}