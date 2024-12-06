import React from "react";
import { memo } from "react";
import FlightSearch from "../../../components/FlightSearch";
import ProfileCard from "../../../components/ProfileCard";
import "./style.scss";

function App() {
  return (
    <>
      <div className="banner">
        <h1>TÌM CHUYẾN BAY </h1>
      </div>
      <div className="App">
        <div className="container">
          <FlightSearch />
          <ProfileCard />
        </div>
      </div>
    </>
  );
}

export default memo(App);
