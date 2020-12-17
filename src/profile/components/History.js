import React from 'react'

export const History = (props) => {
    return(
        <div>
            <div className='history-date'><p>{props.date}</p></div>
            <div className='history-event'><p>{props.event}</p></div>
            
        </div>
    )
}