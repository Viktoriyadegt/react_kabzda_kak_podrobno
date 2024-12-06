import {action} from '@storybook/addon-actions';
import {useState} from "react";
import {Rating} from "./Rating";
import {UnControlledRating} from "./UnControlledRating";

export default {
    component: UnControlledRating
}

const onChangeHandler = action('onChange')

export const UnControlledRatingDemo = () => {
    return <UnControlledRating/>
};




