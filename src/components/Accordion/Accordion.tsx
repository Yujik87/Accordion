import React from 'react';

export type AccordionPropsType = {
    titleValue: string
    /**
     * Show list when 'false'
     * @param logical parameter
     */
    collapsed: boolean
    /**
     * Elements
     */
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onClick={props.onChange}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={props.onClick}>{props.title}</h3>;
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
