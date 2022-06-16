import React from "react";
import "./Show.css";
import Sidebar from "./components/Sidebar";

function Show() {
  return (
    <div className="shoe">
      <Sidebar width={300} />
      <div className="show-container">
        <img
          className="show-img"
          src="https://forward.nhn.com/2020/seoul/hands-on-labs/toastui.chart-dashboard/_images/step08.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Show;
