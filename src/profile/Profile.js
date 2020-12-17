import React from 'react'
import hiyoko from '../images/hiyoko.png'
import { Histories } from './components/Historeis'
import { Skills } from './components/Skills'
import { Works } from './components/Works'
 

export const Profile = () => {
    return(
        <div className="profile">
            {/* <img src={hiyoko} /> */}
            <img src={hiyoko} />
            <h1 className='profile-title'>ぴよぱんまんのプロフィール</h1>
            <Histories />
            <Skills />
            <Works />
        </div>
    )
}