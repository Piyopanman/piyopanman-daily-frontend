import React from 'react'
import { History } from './components/History'
import { Likes } from './components/Likes'
import { Works } from './components/Works'
 

export const Portfolio = () => {
    return(
        <div className="portfolio">
            <h1>ぴよぱんまんのポートフォリオ</h1>
            <History />
            <Likes />
            <Works />
        </div>
    )
}