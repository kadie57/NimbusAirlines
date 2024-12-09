import React from "react";
import { memo } from "react";
import FlightSearch from "../../../components/FlightSearch";
import ProfileCard from "../../../components/ProfileCard";
import "./style-tim-chuyen.scss";

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <div className="TitlePage">Tìm chuyến bay</div>
          <div className="banner-tim-chuyen">
            <img
              src="img\bg.jpg"
              class="banner-tim-chuyen"
              alt="Tìm chuyến bay"
            />
          </div>
          <FlightSearch />
        </div>
      </div>
    </>
  );
}

export default memo(App);
