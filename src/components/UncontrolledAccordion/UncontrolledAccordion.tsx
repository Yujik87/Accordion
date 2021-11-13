import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    let [collapsed, setCollapsed] = useState(true)

    function toggleList() {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                toggleFunction={toggleList}
            />
{/*            <button onClick={() => {setCollapsed(!collapsed)}}>
                Toggle
            </button>*/}
            {!collapsed && <AccordionBody/>}
        </div>
    );
}



type AccordionTitlePropsType = {
    title: string
    toggleFunction: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={props.toggleFunction}>{props.title}</h3>;
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}
