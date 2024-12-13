import React from "react";
import { memo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import { AuthProvider } from "../../../../components/Authentication"; // Điều chỉnh đường dẫn phù hợp

const AdminLayout = ({ children, ...props }) => {
  return (
    <AuthProvider>
      {/* <Router> */}
      <div {...props}>
        <Header />
        {children}
      </div>
      {/* </Router> */}
    </AuthProvider>
  );
};

export default memo(AdminLayout);
