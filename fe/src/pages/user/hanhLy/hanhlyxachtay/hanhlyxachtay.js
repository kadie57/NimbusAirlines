import { memo } from "react";
import "./style.scss";
import { ROUTERS } from "../../../../utils/router";
import Headermini from "../../theme/thongtin";
const Hanhlyxachtay = () => {
  return (
    <>
      <Headermini />
      <h1>hành lý xách tay</h1>
    </>
  );
};

export default memo(Hanhlyxachtay);
