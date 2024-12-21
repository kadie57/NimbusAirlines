import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
import TinTuc from "./pages/user/tintuc";
import DangKy from "./pages/user/dangky";
import Dichvuuutien from "./pages/user/thongtinsanbay/dichvuuutien";
import Phongkhachthuonggia from "./pages/user/thongtinsanbay/phongkhachthuonggia";
import Profile from "./components/UserProfile";
import Dashboard from "./pages/admin/Dashboard";

import AdminLayout from "./pages/admin/theme/adminLayout"; // Add this line
import { useAuth } from "./components/Authentication"; // Add this line
import BookedFlights from "./components/BookedFlight";
import FlightManagement from "./pages/admin/FlightManagement";
import PlaneManagement from "./pages/admin/PlaneManagement";
import Forum from "./pages/admin/NewsManagement";
import Amthucthuonggia from "./pages/user/camnangbay/amthucthuonggia";
import Tichluydam from "./pages/user/tichluydam";

const AdminRoute = ({ children }) => {
  const { isLoggedIn, userRole } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to={`/${ROUTERS.USER.DANGNHAP}`} replace />;
  }

  if (userRole !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

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
    {
      path: ROUTERS.USER.TINTUC,
      component: <TinTuc />,
    },
    {
      path: ROUTERS.USER.DANGKY,
      component: <DangKy />,
    },
    {
      path: ROUTERS.USER.DICHVUUTIEN,
      component: <Dichvuuutien />,
    },
    {
      path: ROUTERS.USER.PHONGKHACHTHUONGGIA,
      component: <Phongkhachthuonggia />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <Profile />,
    },
    {
      path: ROUTERS.USER.VEDADAT,
      component: <BookedFlights />,
    },
    {
      path: ROUTERS.USER.AMTHUC,
      component: <Amthucthuonggia />,
    },
    {
      path: ROUTERS.USER.TICHLUYDAM,
      component: <Tichluydam />,
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

// Import thêm các component admin khác

const renderAdminRouter = () => {
  const adminRouters = [
    {
      path: ROUTERS.ADMIN.DASHBOARD,
      component: <Dashboard />,
    },
    {
      path: ROUTERS.ADMIN.FLIGHTMANAGEMENT,
      component: <FlightManagement />,
    },
    {
      path: ROUTERS.ADMIN.PLANEMANAGEMENT,
      component: <PlaneManagement />,
    },
    {
      path: ROUTERS.ADMIN.NEWSMANAGEMENT,
      component: <Forum />,
    },
    // {
    //   path: ROUTERS.ADMIN.USERS,
    //   component: <UserManagement />,
    // },
  ];

  return (
    <AdminLayout>
      {" "}
      {/* Tạo một layout riêng cho admin */}
      <Routes>
        {adminRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </AdminLayout>
  );
};
const RouterCustom = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route user */}
        <Route path="/*" element={renderUserRouter()} />

        {/* Route admin */}
        <Route path="/admin/*" element={renderAdminRouter()} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterCustom;
