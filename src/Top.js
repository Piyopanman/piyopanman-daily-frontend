import React from 'react'
import hiyoko from './images/hiyoko.png'

export const Top = () => {
    return(
        <div className="top">
            <h1>ぴよぱんまんのサイトです</h1>
            <p>∧( 'Θ' )∧</p>
            <img src={hiyoko} />
        </div>
    )
}