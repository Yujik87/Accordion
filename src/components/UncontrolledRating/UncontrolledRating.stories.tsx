import React from 'react';

import {UncontrolledRating} from './UncontrolledRating';
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
}

const callback = action('accordeon mode change event fired')

export const ModeChanging = () => {
    return <UncontrolledRating />
}