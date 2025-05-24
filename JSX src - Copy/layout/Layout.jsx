import { Outlet } from "react-router";
import StatusBar from "../components/StatusBar";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <>
      <div className="container">
        <StatusBar />
        <div className="main_layout">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
