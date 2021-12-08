import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {OnOff} from './OnOff';
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff,
}

export const OnMode = () => <OnOff on={true} onChange={action('on')}/>
export const OffMode = () => <OnOff on={false} onChange={action('off')}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(3)
    return <OnOff on={value} onChange={setValue}/>
}