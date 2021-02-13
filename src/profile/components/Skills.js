import React from 'react'
import { Skill } from './Skill';

export const Skills = () => {

    const skills = [
        {
            name:'Java',
            text:'大学で2年間。デザインパターン勉強中',
        },
        {
            name:'Django',
            text:'ここのバックエンドに使用',
        },
        {
            name:'React',
            text:'ここのフロントエンドに使用',
        },
        {
            name:'JavaScript',
            text:'ハッカソンと短期インターンで使用',
        },
        {
            name:'Go',
            text:'勉強中'
        }
    ]


    return(
        <div>
            <h1 className='pro-title'>Skills</h1>
            <div className='skill-container'>
            {skills.map( s => <Skill {...s} />)}
            </div>
        </div>
    );
}