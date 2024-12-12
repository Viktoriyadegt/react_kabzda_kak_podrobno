import {ChangeEvent, useRef, useState} from "react";
export default {

}
export const ControlledCheckbox = () =>{

    const [value, setValue] =useState<boolean>(true);
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked);
    }

    return <><input checked={value} type={"checkbox"} onChange={onChangeHandler}/> --- {value.toString()}</>
}


export const ControlledCheckboxWithRef = () =>{

    const [value, setValue] =useState<boolean>(true);
    const checkboxRef = useRef<HTMLInputElement>(null);
    const onChangeHandler = () => {
        const el = checkboxRef.current as HTMLInputElement;
        setValue(el.checked);
    }

    return <><input ref={checkboxRef} checked={value} type={"checkbox"} onChange={onChangeHandler}/> --- {value.toString()}</>
}

export const ControlledCheckboxById = () =>{

    const [value, setValue] =useState<boolean>(false);

    const onChangeHandler = () => {
        const el = document.getElementById('checkboxId')as HTMLInputElement;
        setValue(el.checked);
    }

    return <><input id={'checkboxId'} checked={value} type={"checkbox"} onChange={onChangeHandler}/> --- {value.toString()}</>
}
