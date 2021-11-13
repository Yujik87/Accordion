import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOnOff, setSwitchOnOff] = useState<boolean>(false)

    return (
        <div className="App">
            {/*<UncontrolledOnOff/>
            <UncontrolledOnOff/>*/}
            <OnOff
                on={switchOnOff}
                onChange={setSwitchOnOff}/>
            <Accordion
                titleValue={'Menu'}
                collapsed={accordionCollapsed}
                onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            <Rating
                value={ratingValue}
                onClick={setRatingValue}/>
            {/*<UncontrolledAccordion titleValue={'Countries'}/>
            <UncontrolledAccordion titleValue={'Cities'}/>
            <UncontrolledRating/>*/}
        </div>
    );
}

/*type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}*/

export default App;