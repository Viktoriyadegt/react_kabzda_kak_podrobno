import React, {useState} from 'react';

export const UnControlledRating = () => {

    let [rating, setRating] = useState<number>(0);


    return <div>
        <Star selected={rating > 0} onClick={() => setRating(1)}/>
        <Star selected={rating > 1} onClick={() => setRating(2)}/>
        <Star selected={rating > 2} onClick={() => setRating(3)}/>
        <Star selected={rating > 3} onClick={() => setRating(4)}/>
        <Star selected={rating > 4} onClick={() => setRating(5)}/>
    </div>

}

type StarPropsType = {
    selected: boolean
    onClick: () => void
}

const Star = (props: StarPropsType) => {
    return <span onClick={()=>props.onClick()}>{props.selected ? <b>star </b> : 'star '}</span>
}
