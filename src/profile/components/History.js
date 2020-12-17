import React from 'react'

export const History = (props) => {
    return(
        <div>
            <p>{props.date}</p>
            <p>{props.event}</p>
        </div>
    )
}