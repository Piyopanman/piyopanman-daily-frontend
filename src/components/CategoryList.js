import React from 'react'
import { Link } from 'react-router-dom'

export const CategoryList = () => {
    return(
        <div className="category-list">
        <ul>
            <li><Link to='/daily/category/univ'>大学</Link></li>
            <li><Link to='/daily/category/study'>勉強</Link></li>
            <li><Link to='/daily/category/other'>その他</Link></li>
            <li><Link to='/daily/category/first_meet'>はじめましてだったこと</Link></li>
            <li><Link to='/daily/category/wanna_do'>やりたいこと</Link></li>
            <li><Link to='/daily/category/summary'>1日のまとめ</Link></li>
        </ul>
        </div>
    )
}