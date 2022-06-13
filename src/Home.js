import React from 'react';
import './Home.css';
import Sidebar from './components/Sidebar'

function Home() {
  return (
    <div className="home">
      <Sidebar width={300} />
      <div className="home-container">
        <img className="home-img" src="https://forward.nhn.com/2020/seoul/hands-on-labs/toastui.chart-dashboard/_images/step08.png"
          alt="" />
      </div>


    </div>
  );
}

export default Home;