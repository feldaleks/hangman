import React, {Component} from "react";

const Letter = function (props) { 
    return <span key={props.id} onClick={() => props.onclick(props.id)} className={props.class}>
                {props.isRevealed ? props.letter : "_"}
            </span>
}

export default Letter