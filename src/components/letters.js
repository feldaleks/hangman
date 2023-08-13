import React from 'react'
import Letter from './letter'

const Letters = (props) => {
    //const lettersKeys = Object.keys(props.letters)
    return (
        <div>
            <h5 key="h4">Available letters:</h5>
            {Object.keys(props.letters)
                .map((l,_index) => 
                    <Letter id={l} key={l} onclick={props.useLetter} class={props.letters[l] ? "used" : "origin"} letter={l} isRevealed={true}/>
                    )}
        </div>
    )
}


export default Letters