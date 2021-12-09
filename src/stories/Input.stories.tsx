import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'Input'
};

export const UncontrolledInput = () => <input />

export const ControlledInput = () => <input value={'it-incubator.by'}/>

export const TrackedValueOfUncontrolledInput = () => {
    const[value, setValue] = useState('')
    const onCangeFunction = (event: ChangeEvent<HTMLInputElement>)=>{
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    }
    return <><input onChange={onCangeFunction}/> - {value} </>;
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const[value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return <><input ref={inputRef}/><button onClick={save}>save</button> - actual value: {value} </>;
}

