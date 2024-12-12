import {ChangeEvent, useRef, useState} from "react";
export default {

}
export const UnControlledInput = () =>{

    const [value, setValue] =useState('');
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    return <><input onChange={onChangeHandler}/> --- {value}</>
}

export const ControlledInput = () =>{

    const [value, setValue] =useState('');
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    return <><input value={value} onChange={onChangeHandler}/> --- {value}</>
}


export const ControlledInputByButtonPress = () =>{

    const [value, setValue] =useState('');
    const save = () => {
        const element = document.getElementById('inputId') as HTMLInputElement
        setValue(element.value)
    }
    return <><input id={'inputId'} /><button onClick={save}>save</button> --- {value}</>
}

export const ControlledInputByButtonPressWithRef = () =>{
    const [value, setValue] =useState('');

    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el =inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return <><input ref={inputRef} /><button onClick={save}>save</button> --- {value}</>
}

