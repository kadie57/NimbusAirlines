import { memo } from "react";
import "./style.scss";
import { ROUTERS } from "../../../../utils/router";
import Headermini from "../../theme/thongtin";
const Hanhlykygui = () => {
  return (
    <>
      <Headermini />
      <h1>hành lý ký gửi</h1>
    </>
  );
};

export default memo(Hanhlykygui);
