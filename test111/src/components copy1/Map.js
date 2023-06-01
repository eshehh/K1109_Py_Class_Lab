/*global kakao*/
import React, { useEffect } from 'react'

const { kakao } = window;
const Map = (props) => {

    useEffect(() => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
            level: 3
        };
        var map = new kakao.maps.Map(container, options);
        //  주소로 좌표를 검색합니다
        var geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(props.ADDR1, function (result, status) {
            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });
                map.setCenter(coords);
            }
        });
    }, [props.ADDR1])
    return (
        <div>
            <div id="map" style={{ width: "500px", height: "400px" }}></div>

        </div>
    )
}
export default Map;