import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <div className='header'>
            <h1><Link to='/'>Top</Link></h1>
            <ul>
                <li><Link to='/profile'>profile</Link></li>
                <li><Link to='/daily'>日報</Link></li>
            </ul>
        </div>
    )
}