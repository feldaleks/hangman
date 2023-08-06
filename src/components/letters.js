import React from 'react'

const getLetter = (i) => {
    // 1 <= i <= 32
    let ch = String.fromCharCode(i); // String.fromCharCode(65, 66, 67); // returns "ABC"
    return <span>{ch}</span>
}

const Letters = () => {
    let letter = getLetter(65)
    return (
        <div>
            <div>Available letters</div>
            {letter}
        </div>
    )
}

export default Letters