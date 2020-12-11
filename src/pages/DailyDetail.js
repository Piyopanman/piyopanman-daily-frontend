import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDailyDetail } from '../api/getDaily';
import marked from 'marked';
import { CategoryList } from '../components/CategoryList'


export const DailyDetail = () => {
    const initialState = {
        date: '',
        univ: '',
        study: '',
        other: '',
        first_meet: '',
        wanna_do: '',
        summary: '',
    };

    const [detail, setDetail] = useState(initialState)
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    //console.log(detail)

    useEffect(()=>{
        getDailyDetail(id)
        .then(d => {
            setDetail(d)
            setLoading(false)
        })
        .catch(e => {
            throw new Error(e)
        })
    },[])

    const test = '##見出し';
    
    return(
        <div className="main">
            {loading ?
                <h1>loading....</h1>
                :
                <div className="detail-container">
                    <h1 className="detail-date">{detail.date}</h1>
                    <h1 className="detail-title">大学のこと</h1>
                    <div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.univ}`)}` }} className="detail-content"></div>
                    <h1 className="detail-title">勉強</h1>
                    <div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.study}`)}` }} className="detail-content"></div>
                    <h1 className="detail-title">その他</h1>
                    <div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.other}`)}` }} className="detail-content"></div>
                    <h1 className="detail-title">初めましてだったこと</h1>
                    <div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.first_meet}`)}` }} className="detail-content"></div>
                    <h1 className="detail-title">やりたいこと</h1>
                    <div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.wanna_do}`)}` }} className="detail-content"></div>
                    <h1 className="detail-title">1日のまとめ</h1>
                    <div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.summary}`)}` }} className="detail-content"></div>
                </div>
            }
            <CategoryList />
        </div>
    )
    

}