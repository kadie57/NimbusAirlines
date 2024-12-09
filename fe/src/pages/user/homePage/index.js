import { memo } from "react";
import "./stylehome.scss";
import Tintuc from "../tintuc";
import FlightCards from "../../../components/FlightCards";
import ScrollToHash from "../../../components/ScrollToHash";

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <ScrollToHash />
        <FlightCards />
        <Tintuc />
      </div>
    </>
  );
};

export default memo(HomePage);
