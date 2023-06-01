import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { useState } from 'react';
import Map from './Map';



const PlaceItemBlock = styled.div`
display: flex;
.thumbnail {
margin-right: 1rem;
img {
display: block; width: 160px;
height: 100px; object-fit: cover;
}
}
.contents {
h2 {
margin: 0;
a { color: black; }
}
p {
margin: 0; line-height: 1.5;
margin-top: 0.5rem; white-space: normal;
}
}
& + & { margin-top: 3rem; }

`;

function PlaceItem({ place, category }) {
    const { MAIN_TITLE, SUBTITLE, ADDR1, HOMEPAGE_URL, MAIN_IMG_THUMB, ITEMCNTNTS } = place;

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <PlaceItemBlock>
            <div className='thumbnail'>
                <a href={HOMEPAGE_URL} target='_blank' rel="noreferrer">
                    <img src={MAIN_IMG_THUMB} alt='thumbnail' />
                </a>
            </div>
            <div className='contents'>
                <h2>
                    <a href={HOMEPAGE_URL} target='_blank' rel="noreferrer">
                        {MAIN_TITLE}
                    </a>
                </h2>
                <p>{SUBTITLE}</p>
                <h5>위치 : {ADDR1}</h5>
                <React.Fragment>
                    <button onClick={openModal}>자세히</button>
                    <Modal open={modalOpen} close={closeModal} header="자세히 알아보기">
                        <h2>{MAIN_TITLE}</h2>
                        <p>{SUBTITLE}</p>
                        <h5>위치 : {ADDR1}</h5>
                        {ITEMCNTNTS}
                        <Map ADDR1={ADDR1} />
                    </Modal>
                </React.Fragment>
            </div>
        </PlaceItemBlock>
    );
}

export default PlaceItem;