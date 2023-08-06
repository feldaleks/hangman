import { computeHeadingLevel } from '@testing-library/react'
import React from 'react'


const hiddenWord = (word) => {
    let characters = word.split("")
    let componentToReturn = characters.map((l, index) => <span id={index}>_ </span>)
    return (
        <div>
            {componentToReturn}
        </div>
    )
}

const Word = () => {
    let hint = "Your ideal mood when coding."
    return (
        <div>
        {hiddenWord("calm")}
        <div>{hint}</div>
        </div>
    )
}

export default Word