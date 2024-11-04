import React, {useState} from 'react';

export const UnControlledRating = () => {

    let [rating, setReting] = useState<number>(0);


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
    return <span onClick={()=>props.onClick()}>{props.selected ? <b>star </b> : 'star '}</span>
}
