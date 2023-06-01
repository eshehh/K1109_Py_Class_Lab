import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PlaceItem from './PlaceItem';
import axios from 'axios';

const PlaceListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

function PlaceList({ category }) {
    const [places, setPlaces] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=4QBeN2W7rNDlJ2e0Fu3aXb7Y1IVl8qYNjXwK89ftNrs%2BSJo5ZYkFR2rmYr%2FjguLNylpRdSGxS9U48VGOXJa%2BTw%3D%3D&pageNo=1&numOfRows=150&resultType=json');
                const query = category === 'all' ? response.data.getAttractionKr.item : response.data.getAttractionKr.item.filter((place) => place.GUGUN_NM === category);
                setPlaces(query);

            } catch (e) {

            }
            setLoading(false);
        }
        fetchData();
    }, []);

    // },[category]); //category props 값이 변경시에 동작 되도록

    if (loading) { //로딩시에 보여줄 문자열
        return <PlaceListBlock>대기 중...</PlaceListBlock>
    }

    if (!places) { // articles 상태값이 없을때 
        return null;
    }

    return (
        <PlaceListBlock>
            {/* 샘플 데이터 확인용 */}
            {/* <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/> */}

            {/* 배열.map() 함수의 특성을 이용해서 
                articles배열에 컴포넌트가 담겨지도록 재구성한다. */}
            {places.map(place => {
                return <PlaceItem key={place.UC_SEQ} place={place} category={category} />;
            })}
        </PlaceListBlock>
    )
}

export default PlaceList;