import React from 'react'



const Score = (props) => <h5 id="score" className={props.attempts <= 3 ? props.attempts <= 1 ? "red" : "yellow" : "green" }>Attemts remain: {props.attempts}</h5>

export default Score