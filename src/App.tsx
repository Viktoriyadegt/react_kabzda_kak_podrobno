import React from 'react';
import './App.css';
import {UnControlledRating} from "./components/Rating/UnControlledRating";
import {UnControlledAccordion} from "./components/Accordion/UnControlledAccordion";

function App() {
    return (
        <div>
            <UnControlledRating/>
            <UnControlledAccordion title={'menu'}/>
        </div>
    );
}





export default App;
