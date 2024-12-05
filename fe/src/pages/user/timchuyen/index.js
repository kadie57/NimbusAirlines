import { memo } from "react";
import "./style.scss";
import Headermini from "../theme/thongtin";
const timchuyen = () => {
  return (
    <>
      <Headermini />
      <h1>timchuyen</h1>
    </>
  );
};

export default memo(timchuyen);
