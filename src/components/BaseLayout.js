import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import NavbarTwo from "./NavbarTwo";
import Footer from "./Footer";

const BaseLayout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="contentWrapper">
        <Navbar />
        <NavbarTwo />
        <main className="mainContent">{children}
          <Footer />
        </main>
      </div>

    </div>
  );
};

export default BaseLayout;
