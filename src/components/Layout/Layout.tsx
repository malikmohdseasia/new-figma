import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";


const Layout = ({isOpen, setIsOpen, modalShow, setModalShow}:any) => {
  return (
    <div className=" w-container flex mx-auto my-2">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setModalShow={setModalShow} modalShow={modalShow}/>

      {/* Main Content */}
      <main className="flex-1 p-4 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
