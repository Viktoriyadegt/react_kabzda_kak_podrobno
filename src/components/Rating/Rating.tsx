import React from "react";


type RatingPropsType = {
    rating: number
}
export const Rating = (props: RatingPropsType) => {
    if (props.rating === 1) {
        return <div>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    }
    if (props.rating === 2) {
        return <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    }
    if (props.rating === 3) {
        return <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    }
    if (props.rating === 4) {
        return <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
        </div>
    }
    if (props.rating === 5) {
        return <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
        </div>
    }
    return <div>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </div>
}

type StarPropsType = {
    selected: boolean
}

const Star = (props: StarPropsType) => {
    if (props.selected) {
        return <div><b>star</b></div>
    } else {
        return <div>star</div>

    }

}
