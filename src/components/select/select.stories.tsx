import {ChangeEvent, useRef, useState} from "react";
export default {

}
export const ControlledSelect = () =>{

    const [value, setValue] =useState<string|undefined>(undefined);
    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value);
    }

    return <select value={value}  onChange={onChangeHandler}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option selected value={'2'}>Gomel</option>
        <option value={'3'}>Grodno</option>
        --- {value}</select>
}


