import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <img src="images/mainImage.jpg" alt="" width="100%" height="700px" />
      <div className="margin"></div>
      <div>
        <p>
          <h2 id="statTitle">질병통계</h2>
        </p>
        <ul>
          <li>
            <img src="images/ageIcon.png" width="50%" />
            <br />
            연령대별
          </li>
          <li>
            <img src="images/sexIcon.png" width="50%" />
            <br />
            성별
          </li>
          <li>
            <img src="images/diseaseIcon.png" width="50%" />
            <br />
            기저질환별
          </li>
        </ul>
        <ul>
          <li>
            <img src="images/medisubIcon.png" width="50%" />
            <br />
            진료과목별
          </li>
          <li>
            <img src="images/periodIcon.png" width="50%" />
            <br />
            기간별
          </li>
          <li>
            <img src="images/areaIcon.png" width="50%" />
            <br />
            지역별
          </li>
        </ul>
      </div>
      <p>
        <h2 id="locationTitle">위치</h2>
      </p>
    </div>
  );
};

export default Home;
