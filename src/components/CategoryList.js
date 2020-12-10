import React from 'react'
import { Link } from 'react-router-dom'

export const CategoryList = () => {
    return(
        <div className="category-list">
        <ul>
            <li><Link to='/univ'>大学</Link></li>
            <li><Link to='/study'>勉強</Link></li>
            <li><Link to='/other'>その他</Link></li>
            <li><Link to='/first_meet'>はじめましてだったこと</Link></li>
            <li><Link to='/wanna_do'>やりたいこと</Link></li>
            <li><Link to='/summary'>1日のまとめ</Link></li>
        </ul>
        </div>
    )
}