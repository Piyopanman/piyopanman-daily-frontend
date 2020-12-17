import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../images/hiyoko_perfect.png';
import img2 from '../../images/hiyoko_good.png';
import img3 from '../../images/hiyoko_soso.png';
import img4 from '../../images/hiyoko_bad.png';

export const DailyContent = (daily) => {
    let eva;
    if(daily.evaluation === 'perfect'){
        eva = img1;
    }else if(daily.evaluation === 'good'){
        eva = img2;
    }else if(daily.evaluation === 'soso'){
        eva = img3;
    }else{
        eva = img4;
    }

    return(
        <div className="daily-content">
            <Link to={`daily/${daily.id}`}> <h1>{daily.date}</h1> </Link> 
            <img src={eva} alt='evaluation' className="evaluation" />
        </div>
    )
}