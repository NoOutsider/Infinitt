/*global kakao*/
import React, { useEffect } from 'react'
import "./Find.css"
import Sidebar from "./components/Sidebar";

{/*
import React, { useEffect } from 'react'
import "./Find.css"

const Find = () => {

  useEffect(() => {
    var mapContainer = document.getElementById('map'),
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3 // 지도의 확대 레벨
    };
    var map = new kakao.maps.Map(mapContainer, mapOption); 
  }, [])


  return (
    <div>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </div>
  )
}

export default Find;
*/}



function Find() {

  useEffect(() => {
    var mapContainer = document.getElementById('map'),
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3 // 지도의 확대 레벨
      };
    var map = new kakao.maps.Map(mapContainer, mapOption);
  }, [])

  return (
    <div className="find">
      <Sidebar width={300} />
      <div className="map" id="map" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
}

export default Find;

