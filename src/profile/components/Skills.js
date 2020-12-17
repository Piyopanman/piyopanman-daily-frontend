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
            name:'React.js',
            text:'ここのフロントエンドに使用',
        },
        {
            name:'JavaScript',
            text:'ハッカソンでちょっと触った',
        },
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