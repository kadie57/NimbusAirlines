import React from "react";
import { memo } from "react";
import FlightSearch from "../../../components/FlightSearch";
import ProfileCard from "../../../components/ProfileCard";
import "./style-tim-chuyen.scss";

function App() {
  return (
    <>
      {" "}
      <div class="luggage-banner-wrapper">
        <img src="img\Banner_2.png" class="luggage-banner" alt="Hành lý" />
      </div>
      <div id="tim-chuyen">
        <div className="App">
          <div className="container"></div>
          <FlightSearch />
        </div>
      </div>
    </>
  );
}

export default memo(App);
