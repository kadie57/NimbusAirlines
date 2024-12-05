import { memo } from "react";
import "./style.scss";
import { ROUTERS } from "../../../../utils/router";
import Headermini from "../../theme/thongtin";
const Hanhlydacbiet = () => {
  return (
    <>
      <Headermini />
      <h1>hanhlydacbiet</h1>
    </>
  );
};

export default memo(Hanhlydacbiet);
