import React from 'react'
import Letter from './letter'


const Solution = (props) => {
    let hint = props.hint
    let word = props.word
    let characters = word.split("")
    let componentToReturn = characters
    .map((l, _index) => <Letter id={_index} key={_index} onclick={console.log} letter= {l} isRevealed={props.letters[characters[_index]]}/>)    
    //.map((l, _index) => <Letter id={_index} key={_index} onclick={console.log} letter={props.letters[characters[_index]] ? l : "_"}/>)
        //<span id={_index} key={_index}>{props.letters[characters[_index]] ? l : "_"}</span>
    return (
        <div>
            <h4>Hint: {hint}</h4>
            {componentToReturn}
        </div>
    )
}

export default Solution