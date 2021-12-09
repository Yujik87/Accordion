import React, { useState } from "react";

export default {
    title: 'Input'
};

export const UncontrolledInput = () => <input />

export const TrackedValueOfUncontrolledInput = () => {
    const[value, setValue] = useState('')
    return <><input onChange={(event)=>{
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    }}/> - {value} </>;
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const[value, setValue] = useState('')
    return <><input /><button>save</button> - actual value: {value} </>;
}

export const ControlledInput = () => <input value={'it-incubator.by'}/>