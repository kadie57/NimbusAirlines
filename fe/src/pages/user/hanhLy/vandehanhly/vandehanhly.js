import { memo } from "react";
import "./style.scss";
import { ROUTERS } from "../../../../utils/router";
import Headermini from "../../theme/thongtin";
const Vandehanhly = () => {
  return (
    <>
      <Headermini />
      <h1>vandehanhly</h1>
    </>
  );
};

export default memo(Vandehanhly);
