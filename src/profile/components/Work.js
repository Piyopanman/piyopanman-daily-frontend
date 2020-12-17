import React from 'react'

export const Work = (props) => {
    return(
        <div className='work-item'>
            <a href={props.link}>{props.title}</a>
            <img className='work-img' src={props.img}/>
            <p className='work-text'>{props.text}</p>
            <p className='work-tech'>使用技術: {props.techs}</p>
        </div>
    )
}