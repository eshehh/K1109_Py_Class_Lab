import React, { useState, useEffect } from 'react';
import './Map.css';
import { useNavigate } from 'react-router-dom';

const { kakao } = window;

const Map = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const categories = [
      { name: '거제도', text: '거제도', position: new kakao.maps.LatLng(34.8829, 128.6257)},
      { name: '거문도', text: '거문도', position: new kakao.maps.LatLng(34.04891845908688, 127.31827022698606)},
      { name: '추자도', text: '추자도', position: new kakao.maps.LatLng(33.9479025818319, 126.32009685189168)},
      { name: '통영', text: '통영', position: new kakao.maps.LatLng(34.93664371655075, 128.4131523415331)},
    ];

    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(34.686662109330406, 127.75672507111314),
      level: 12,
      disableScrollWheelZoom: true,
      draggable: false,
    };
    const map = new kakao.maps.Map(container, options);

    categories.forEach((category) => {
      const marker = new kakao.maps.Marker({
        map,
        position: category.position,
      });

      kakao.maps.event.addListener(marker, 'click', () => {
        setSelectedCategory(category);
        navigate(`/${category.name}`);
      });
    });
  }, [navigate]);
  return (
    <div>
      <div className="map-container" id="map" />
    </div>
  );
};

export default Map;