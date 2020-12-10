import React from 'react';
import hiyoko from '../images/hiyoko.png';

export const Top = () => {
    return(
        <div className="top">
            <h1>ぴよぱんまんのサイトです</h1>
            <p>今は日報のみですが、そのうちいろいろと増やす予定です</p>
            <img src={hiyoko} />
        </div>
    )
}