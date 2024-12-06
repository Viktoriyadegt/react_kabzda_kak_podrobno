import {action} from '@storybook/addon-actions';
import {useState} from "react";
import {Rating} from "./Rating";

export default {
    component: Rating
}

const onChangeHandler = action('onChange')

export const RatingEmpty = () => {
    return <Rating rating={0} changeRating={onChangeHandler}/>
};
export const Rating1 = () => {
    return <Rating rating={1} changeRating={onChangeHandler}/>
};
export const Rating2 = () => {
    return <Rating rating={2} changeRating={onChangeHandler}/>
};
export const Rating3 = () => {
    return <Rating rating={3} changeRating={onChangeHandler}/>
};
export const Rating4 = () => {
    return <Rating rating={4} changeRating={onChangeHandler}/>
};
export const Rating5 = () => {
    return <Rating rating={5} changeRating={onChangeHandler}/>
};


export const RatingChanged = () => {
    const [value, setValue] = useState<number>(0);
    return <Rating rating={value} changeRating={setValue}/>
};





