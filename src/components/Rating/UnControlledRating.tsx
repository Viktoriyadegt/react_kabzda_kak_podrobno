import React, {useState} from 'react';

export const UnControlledRating = () => {

    let [rating, setReting] = useState<number>(0);

    const styledButton = {
        width: '20px',
        height: '20px',
        display: 'inline-block',
        backgroundColor: 'gold',
        border: '0.5px solid black',
        borderRadius: '20px',
        cursor: 'pointer',
        margin: '5px'
    }

    return <div>
        <Star selected={rating > 0}/>
        <button style={styledButton} onClick={() => setReting(1)}></button>
        <Star selected={rating > 1}/>
        <button style={styledButton}  onClick={() => setReting(2)}></button>
        <Star selected={rating > 2}/>
        <button style={styledButton} onClick={() => setReting(3)}></button>
        <Star selected={rating > 3}/>
        <button style={styledButton} onClick={() => setReting(4)}></button>
        <Star selected={rating > 4}/>
        <button style={styledButton} onClick={() => setReting(5)}></button>
    </div>

}

type StarPropsType = {
    selected: boolean
}

const Star = (props: StarPropsType) => {
    if (props.selected) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>

    }

}
