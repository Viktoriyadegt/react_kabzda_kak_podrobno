import React, {useState} from 'react';

export const UnControlledRating = () => {

    let [rating, setReting] = useState<number>(0);

    /*const styledButton = {
        width: '20px',
        height: '20px',
        display: 'inline-block',
        backgroundColor: 'gold',
        border: '0.5px solid black',
        borderRadius: '20px',
        cursor: 'pointer',
        margin: '5px'
    }*/


    return <div>
        <Star selected={rating > 0} onClick={() => setReting(1)}/>
        <Star selected={rating > 1} onClick={() => setReting(2)}/>
        <Star selected={rating > 2} onClick={() => setReting(3)}/>
        <Star selected={rating > 3} onClick={() => setReting(4)}/>
        <Star selected={rating > 4} onClick={() => setReting(5)}/>
    </div>

}

type StarPropsType = {
    selected: boolean
    onClick: () => void
}

const Star = (props: StarPropsType) => {
    return props.selected
        ? <span onClick={props.onClick}><b>star </b></span>
        : <span onClick={props.onClick}>star </span>

}
