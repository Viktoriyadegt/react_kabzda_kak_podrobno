import React from "react";


type RatingPropsType = {
    rating: number
    changeRating: (rating: number) => void
}
export const Rating = (props: RatingPropsType) => {

    return <div>
        <Star selected={props.rating > 0} changeRating={() => props.changeRating(1)}/>
        <Star selected={props.rating > 1} changeRating={() => props.changeRating(2)}/>
        <Star selected={props.rating > 2} changeRating={() => props.changeRating(3)}/>
        <Star selected={props.rating > 3} changeRating={() => props.changeRating(4)}/>
        <Star selected={props.rating > 4} changeRating={() => props.changeRating(5)}/>
    </div>

}

type StarPropsType = {
    selected: boolean
    changeRating: () => void
}

const Star = (props: StarPropsType) => {

    const changeRatingHandler = () => {
        props.changeRating()
    }
    return <span onClick={changeRatingHandler}>{props.selected
        ? <b>star </b>
        : 'star '
    }
    </span>

}
