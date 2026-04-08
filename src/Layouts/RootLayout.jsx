import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/Shared/NavBar/NavBar";
import Footer from "../Components/Shared/Footer/Footer";
import ScrollToTop from "../Components/Shared/ScrollToTop/ScrollToTop";

const RootLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
