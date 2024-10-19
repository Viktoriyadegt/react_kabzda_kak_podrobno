import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <PageTitle title={'This is App components'}/>
            <Rating rating={7}/>
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Books'} collapsed={false}/>
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
