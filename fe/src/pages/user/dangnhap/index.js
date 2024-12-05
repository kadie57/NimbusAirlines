import { memo } from "react";
import "./style.scss";
import Headermini from "../theme/thongtin";
const dangnhap = () => {
  return (
    <>
      <Headermini />
      <h1>dangnhap</h1>
    </>
  );
};

export default memo(dangnhap);
