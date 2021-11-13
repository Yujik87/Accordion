import React, {useState} from 'react';

export function UncontrolledRating() {
    console.log('Rating rendering')

    let [val, setVal] = useState(0)

    return (
        <div>
            <Star
                selected={val > 0}
                selectFunction={() => {
                    setVal(1)
                }}/>
            <Star
                selected={val > 1}
                selectFunction={() => {
                    setVal(2)
                }}/>
            <Star
                selected={val > 2}
                selectFunction={() => {
                    setVal(3)
                }}/>
            <Star
                selected={val > 3}
                selectFunction={() => {
                    setVal(4)
                }}/>
            <Star
                selected={val > 4}
                selectFunction={() => {
                    setVal(5)
                }}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    selectFunction: () => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')

    return <span onClick={() => props.selectFunction()}>
        {(props.selected) ? <b> star </b> : ' star '}
    </span>

}