import React from 'react'

export const Work = (props) => {
    return(
        <div>
            <a href={props.link}><h1>{props.title}</h1></a>
            <img className='work-img' src={props.img}/>
            <p>{props.text}</p>
            <p>使用技術: {props.techs}</p>
        </div>
    )
}