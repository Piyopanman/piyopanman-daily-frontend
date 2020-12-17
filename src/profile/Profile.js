import React from 'react'
import { Histories } from './components/Historeis'
import { Skills } from './components/Skills'
import { Works } from './components/Works'
 

export const Profile = () => {
    return(
        <div className="profile">
            <h1>ぴよぱんまんの自己紹介</h1>
            <Histories />
            <Skills />
            <Works />
        </div>
    )
}