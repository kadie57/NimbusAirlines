import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/user/homePage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/user/theme/masterLayout";
import Hanhlyxachtay from "./pages/user/hanhLy/hanhlyxachtay/hanhlyxachtay";
import Hanhlykygui from "./pages/user/hanhLy/hanhlykygui/hanhlykygui";
import Hanhlydacbiet from "./pages/user/hanhLy/hanhlydacbiet/hanhlydacbiet";
import Vandehanhly from "./pages/user/hanhLy/vandehanhly/vandehanhly";
import Tructiep from "./pages/user/thutuc/tructiep";
import Tructuyen from "./pages/user/thutuc/tructuyen";
import Baynoidia from "./pages/user/camnangbay/baynoidia";
import Baynuocngoai from "./pages/user/camnangbay/baynuocngoai";
import Timchuyen from "./pages/user/timchuyen/App";
import Datve from "./pages/user/datve";
import Dangnhap from "./pages/user/dangnhap";
const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTERS.USER.HANHLYXACHTAY,
      component: <Hanhlyxachtay />,
    },
    {
      path: ROUTERS.USER.HANHLYKYGUI,
      component: <Hanhlykygui />,
    },
    {
      path: ROUTERS.USER.HANHLYDACBIET,
      component: <Hanhlydacbiet />,
    },
    {
      path: ROUTERS.USER.VANDEHANHLY,
      component: <Vandehanhly />,
    },
    {
      path: ROUTERS.USER.TTTRUCTIEP,
      component: <Tructiep />,
    },
    {
      path: ROUTERS.USER.TTTRUCTUYEN,
      component: <Tructuyen />,
    },
    {
      path: ROUTERS.USER.NOIDIA,
      component: <Baynoidia />,
    },
    {
      path: ROUTERS.USER.NUOCNGOAI,
      component: <Baynuocngoai />,
    },
    {
      path: ROUTERS.USER.TIMCHUYEN,
      component: <Timchuyen />,
    },
    {
      path: ROUTERS.USER.DATVE,
      component: <Datve />,
    },
    {
      path: ROUTERS.USER.DANGNHAP,
      component: <Dangnhap />,
    },
  ];
  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};
const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
