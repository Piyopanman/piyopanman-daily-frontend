import React from 'react'
import { History } from './History'

export const Histories = () => {

    const historeis = [
        {
            date: '2013年3月',
            event: '江戸川女子中学校入学',
        },
        {
            date: '2016年3月',
            event: '江戸川女子高等学校入学',
        },
        {
            date: '2019年3月',
            event: '津田塾大学学芸学部情報科学科入学',
        },
        {
            date: '2020年7月',
            event: '技育祭を視聴し同世代のアウトプットに衝撃を受ける',
        },
        {
            date: '2020年9月',
            event: '技育展「はじめてのアウトプット」 登壇',
        },
        {
            date: '2020年10月',
            event: 'オータムハッカソン 入賞',
        },
        {
            date: '2020年11月',
            event: 'ICPC 参加',
        },
    ]

    return(
        <div>
            <h1 className='pro-title'>History</h1>
            <div className="history-container">
            {historeis.map(h => <History {...h} />)}
            </div>
        </div>
    );

}