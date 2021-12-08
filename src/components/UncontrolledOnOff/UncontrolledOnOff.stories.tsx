import React from 'react';

import {UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

const callback = action('accordeon mode change event fired')

export const ModeChanging = () => {
    return <UncontrolledOnOff onChange={callback}/>
}