import React from 'react'

export const Skill = (props) => {
    return(
        <div class='skill-item'>
            <h1>{props.name}</h1>
            <p>{props.text}</p>
        </div>
    )
}