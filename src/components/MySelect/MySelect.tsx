import React, {useState} from "react";

type ItemType = {
    title: string
    value: string
}
type SelectPropsType = {}


export const MySelect1 = (props: SelectPropsType) => {
    const [items, setItems] = useState<ItemType[]>([
        {title: 'potato', value: '1'},
        {title: 'tomato', value: '2'},
        {title: 'fish', value: '3'}]
    )
    const [value, setValue] = useState<string>('-----')
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const changeCollapsed =( ) => {
        setCollapsed(!collapsed)
    }

    const selectedValue = (title: string) => {
        setValue(title)
        setCollapsed(!collapsed)
    }


    return <div>
        <SelectedTitle value={value} changeCollapsed={changeCollapsed}/>
        {!collapsed&&<SelectedBody items={items} selectedValue={selectedValue} changeCollapsed={changeCollapsed} />}
    </div>

}


type SelectedTitlePropsType = {
    value: string
    changeCollapsed: () => void
}

const SelectedTitle = (props: SelectedTitlePropsType) => {
    const onClickHandler = () => props.changeCollapsed()
    return <h3 onClick={onClickHandler}>{props.value}</h3>
}

type SelectedBodyPropsType = {
    items: ItemType[]
    selectedValue:(title:string)=>void
    changeCollapsed: () => void
}

const SelectedBody = (props: SelectedBodyPropsType) => {

    return <ul >
        {props.items.map(item => {
            const onclickHandler = () => {
                props.selectedValue(item.title)
            }

            return <div>
                <li key={item.value} onClick={onclickHandler}>{item.title}</li>
            </div>
        })}
    </ul>
}



