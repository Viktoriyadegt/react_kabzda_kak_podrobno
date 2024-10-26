import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/Accordion/UnControlledAccordion";
import {UnControlledRating} from "./components/Rating/UnControlledRating";

function App() {
    return (
        <div>
           {/* <PageTitle title={'This is App components'}/>
            <Rating rating={0}/>
            <Rating rating={1}/>
            <Rating rating={2}/>
            <Rating rating={3}/>
            <Rating rating={4}/>
            <Rating rating={5}/>
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Books'} collapsed={false}/>*/}
            {/*<OnOff />*/}
            {/*<OnOff />*/}
            {/*<UnControlledAccordion title={'Menu'}/>*/}
            <UnControlledRating/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
const PageTitle = (props:PageTitlePropsType) => {
    return <h3> {props.title}</h3>
}



export default App;
