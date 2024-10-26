import React from "react";


type RatingPropsType = {
    rating: number
}
export const Rating = (props: RatingPropsType) => {

    return <div>
        <Star selected={props.rating > 0}/>
        <Star selected={props.rating > 1}/>
        <Star selected={props.rating > 2}/>
        <Star selected={props.rating > 3}/>
        <Star selected={props.rating > 4}/>
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
