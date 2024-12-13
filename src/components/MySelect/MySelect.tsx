import React, {useState} from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

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
    const [value, setValue] = useState<string>('')
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const selectedValue = (title: string) => {
        setValue(title)
    }


    return <FormControl fullWidth sx={{ m: 3, maxWidth: 120 }} size="small">
        <SelectedTitle value={'Menu'} changeCollapsed={changeCollapsed}/>
        {!collapsed && <SelectedBody items={items} selectedValue={selectedValue} value={value}
                                     changeCollapsed={changeCollapsed}/>}
    </FormControl>


}


type SelectedTitlePropsType = {
    value: string
    changeCollapsed: () => void
}

const SelectedTitle = (props: SelectedTitlePropsType) => {
    const onClickHandler = () => props.changeCollapsed()
    return <InputLabel id="mySelect-label" onClick={onClickHandler}>{props.value}</InputLabel>
}

type SelectedBodyPropsType = {
    items: ItemType[]
    selectedValue: (title: string) => void
    changeCollapsed: () => void
    value: string
}

const SelectedBody = (props: SelectedBodyPropsType) => {

    return <Select
        labelId="MySelect-label"
        id="MySelect"
        label="Menu">
        {props.items.map(item => {
            const onclickHandler = () => {
                props.selectedValue(item.title)
            }

            return <MenuItem value={ item.value} key={item.value} onClick={onclickHandler}>{item.title}</MenuItem>
        })}
    </Select>
}



