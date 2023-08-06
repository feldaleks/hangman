import React from 'react'

const getLetter = (i) => {
    // 65 <= i <= 90, 65 - A, 90 - Z
    let ch = String.fromCharCode(i); // String.fromCharCode(65, 66, 67); // returns "ABC"
    return <span>{ch}</span>
}

const Letters = () => {
    let chars = Array.from({ length: 26}, (_, index) => getLetter(index + 65))
    return (
        <div>
            <div>Available letters</div>
            {chars}
        </div>
    )
}

export default Letters