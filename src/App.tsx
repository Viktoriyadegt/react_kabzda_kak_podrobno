import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {

    let [collapsed, setCollapsed] = useState(false);

    const changeCollapsed = (collapsed: boolean) => {
        setCollapsed(collapsed)
    }


    let [rating, setReting] = useState<number>(0);

    const changeRating = (rating: number) => {
        setReting(rating)
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
        </div>
    );
}


export default App;
