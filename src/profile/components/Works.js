import React from 'react'
import tsuda from '../../images/profile/TsudaRoomSearch.png'
import processing from '../../images/profile/processing.gif'
import povray from '../../images/profile/povray.png'  
import repuSearch from '../../images/profile/TwitterReputationSearch.png'
import nippo from '../../images/profile/daily.png'
import { Work } from './Work'

export const Works = () => {
    const works = [
        {
            key: 1,
            title:'Tsuda Room Search',
            img: tsuda,
            text:'初めての個人開発。コロナで大学に行けない大学1年生のために作ったLINEBOT。',
            techs:'GAS, JavaScript, LINE Messaging API',
            link: 'https://hiyoko-coder.hatenablog.com/entry/2020/09/29/200231?_ga=2.101298499.319324300.1608184294-524672757.1606356560',
        },
        {
            key: 2,
            title:'的当て？',
            img: processing,
            text:'大学の授業にて。クリックでボールを発射し的に当たると文字が出現します。',
            techs:'Processing',
            link: 'https://github.com/Piyopanman/graphics_works',

        },
        {
            key: 3,
            title:'ひよこ?',
            img: povray,
            text:'大学の授業にて。ウサギさん♡ネコちゃん♡キャワ♡みたいな感じだとつまらないよなと思いながら作ったらこうなりました。',
            techs:'POV-ray',
            link: 'https://github.com/Piyopanman/graphics_works',

        },
        {
            key: 4,
            title:'Twitter Reputation Search',
            img: repuSearch,
            text:'オータムハッカソンにて。形態素分析を用いたネガポジ判定ができます。',
            techs: 'JavaScript, Flask, TwitterAPI など',
            link: 'https://github.com/y-yana/Twitter-Reputation-Search',

        },
        {
            key: 5,
            title:'日報',
            img: nippo,
            text:'個人開発。1日にやったことをまとめておきたくて作りました。カテゴリ別に見られるところが気に入っています。',
            techs:'React.js, Django',
            link: 'https://piyopanman.piyopanman.vercel.app/',
        },

    ]

    console.log(works)

    return(
        <div>
            <h1>works</h1>
            {works.map(w => <Work {...w} />)}
        </div>
    );
}