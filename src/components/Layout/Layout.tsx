import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import LogoutWarning from "../Auth/Logout";

const Layout = ({ isOpen, setIsOpen, modalShow, setModalShow }: any) => {
  return (
    <>
      <div className="w-container flex mx-auto my-2">
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          modalShow={modalShow}
          setModalShow={setModalShow}
        />

        <main className="flex-1 p-4 bg-gray-50 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {modalShow && (
        <LogoutWarning
          modalShow={modalShow}
          setModalShow={setModalShow}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};

export default Layout;
