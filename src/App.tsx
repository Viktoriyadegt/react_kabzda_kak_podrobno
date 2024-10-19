import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

const AppTitle = () => {
    return <> This is App Component</>
}

const Rating = () => {
    return <div>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
    </div>
}

const Star = () => {
    return <div>star</div>
}

const Accordion = () => {
    return <div>
        <AccordionTitle/>
        <AccordionBody/>
    </div>
}

const AccordionTitle = () => {
    return <h3>Menu</h3>
}

const AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}


export default App;
