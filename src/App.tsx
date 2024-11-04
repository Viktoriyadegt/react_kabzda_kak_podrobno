import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledOnOff} from "./components/OnOff/UnControlledOnOff";

function App() {

    let [collapsed, setCollapsed] = useState(false);

    const changeCollapsed = (collapsed: boolean) => {
        setCollapsed(collapsed)
    }


    let [rating, setReting] = useState<number>(0);

    const changeRating = (rating: number) => {
        setReting(rating)
    }

    let [value, setValue] = useState(false)

    const changeOnOff = (value:boolean) => {
        setValue(value)
    }

    return (
        <div>
            <Rating rating={rating}
                    changeRating={changeRating}
            />
            <Accordion title={'menu'}
                       collapsed={collapsed}
                       changeCollapsed={changeCollapsed}
            />
            <OnOff changeOnOff={changeOnOff} value={value}/>
            <UnControlledOnOff/>
        </div>
    );
}


export default App;
