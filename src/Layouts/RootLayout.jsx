import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import NavBar from "../Components/Shared/NavBar/NavBar";
import Footer from "../Components/Shared/Footer/Footer";
import ScrollToTop from "../Components/Shared/ScrollToTop/ScrollToTop";
import Loading from "../Components/Shared/LoadingSpinner/Loading";

const RootLayout = () => {
  const navigation = useNavigation();
  const [welcomeLoader, setWelcomeLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcomeLoader(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (welcomeLoader) return <Loading />;

  if (navigation.state === "loading") return <Loading />;
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
