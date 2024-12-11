import React from "react";
import { memo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import { AuthProvider } from "../../../../components/Authentication"; // Điều chỉnh đường dẫn phù hợp

const MasterLayout = ({ children, ...props }) => {
  return (
    <AuthProvider>
      {/* <Router> */}
      <div {...props}>
        <Header />
        {children}
        <Footer />
      </div>
      {/* </Router> */}
    </AuthProvider>
  );
};

export default memo(MasterLayout);
