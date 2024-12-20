import { memo } from "react";
import "./stylehome.scss";
import Tintuc from "../tintuc";
import FlightCards from "../../../components/FlightCards";
import ScrollToHash from "../../../components/ScrollToHash";
import TinNgan from "../tinngan";

const HomePage = () => {
  return (
    <>
      <img className="banner" src="img/homepage.jpg" alt="banner" />

      <div className="homepage">
        <ScrollToHash />
        <TinNgan />
        <FlightCards />
        <Tintuc />
      </div>
    </>
  );
};

export default memo(HomePage);
