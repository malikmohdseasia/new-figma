import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  BottomArrow,
  DashboardIcon,
  smileIcons,
  AIcon,
  Sicon,
  PagesIcon,
  ApplicationIcon,
  EcommerceIcon,
  AuthIcon,
  Eicon,
  BIcon,
  Cicon,
  BasicIcon,
  ComponentIcon,
  changelogIcon,
  Logout,
  ArrowRight,
  CicleCross,
} from "../assets/Icons";
import ProfileImg from "../assets/sidebar/Image1.svg";
import { toast } from "react-toastify";
import LogoutWarning from "./Auth/Logout";

const Sidebar = ({ isOpen, setIsOpen, modalShow, setModalShow }: any) => {
  const [open, setOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [slide, setSlide] = useState<Boolean>(false);

  const navigate = useNavigate();

  const navItems1 = [
    {
      title: "Dashboards",
      svg: DashboardIcon,
      svg2: BottomArrow,
    },
    { title: "Analytics", svg: AIcon },
    { title: "Smart Home", svg: Sicon },
  ];

  const navItems2 = [
    { title: "Pages", svg: PagesIcon, svg2: BottomArrow },
    { title: "Applications", svg: ApplicationIcon, svg2: BottomArrow },
    { title: "Ecommerce", svg: EcommerceIcon, svg2: BottomArrow },
    { title: "Authentication", svg: AuthIcon, svg2: BottomArrow },
    { title: "Error", svg: Eicon, svg2: BottomArrow },
    { title: "Error 404", svg: BIcon },
    { title: "Error 500", svg: Cicon },
  ];

  const navItems3 = [
    { title: "Basic", svg: BasicIcon, svg2: BottomArrow },
    { title: "Components", svg: ComponentIcon, svg2: BottomArrow },
    { title: "Changelog", svg: changelogIcon },
  ];

  const confirmLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
    toast.success("Successfully Logout!");
    setModalShow(false);
  };

  return (
    <>
      {/* 🔹 Hamburger Button (Mobile Only) */}
      <button
        onClick={() => {
          setOpen(!open);
          setSlide(true)
        }}
        className={`lg:hidden fixed top-4 left-4 z-20 text-gray-500 text-2xl`}
      >
        ☰
      </button>

      <div
        className={`hidden lg:flex absolute top-5 rotate-180 ${
          slide ? "left-64" : "left-20"
        } z-50
          transition-all duration-300 ease-in-out
         `}
        onClick={() => setSlide((pre) => !pre)}
      >
        {ArrowRight}
      </div>

      {modalShow && (
        <div className="absolute  transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 flex items-center justify-center">
          <div className="w-full md:w-100 rounded-xl bg-white p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-gray-900">
              Confirm Logout
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Are you sure you want to logout?
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setModalShow(false)}
                className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={confirmLogout}
                className="rounded-lg bg-indigo-500 px-4 py-2 text-sm text-white hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🔹 Sidebar */}
      <div
        className={`
    fixed lg:static top-0 left-0 z-20 no-scrollbar
    h-full overflow-y-auto
    bg-[linear-gradient(180deg,#3E3D45_0%,#202020_100%)]
    p-2 rounded-none lg:rounded-xl
    transition-all duration-300 ease-in-out   /* 👈 important */
    ${slide ? "w-64 text-left" : "w-20 text-center"}
    ${open ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0

    
  `}
      >

        <div onClick={()=>setOpen(false)} className="absolute top-3 right-2 lg:hidden">{CicleCross}</div>
        {/* Logo */}
        <div
          className={`flex items-center gap-2 ${
            !slide ? "px-4 justify-center" : "px-0"
          } `}
        >
          {smileIcons}
          {slide && (
            <h1 className="text-sm text-navItems font-bold">
              Material Dashboard 2 PRO
            </h1>
          )}
        </div>

        <hr
          className={`border border-navItems my-4 ${
            !slide ? " w-[30%] mx-auto" : "w-100%"
          }`}
        />

        {/* Profile */}
        <div className="flex justify-between items-center px-5">
          <div className="flex gap-2 items-center">
            <img src={ProfileImg} className="w-8 h-8 rounded-full" />
            {slide && <h1 className="text-sm text-navItems">Brooklyn Alice</h1>}
          </div>
          {slide && <div>{BottomArrow}</div>}
        </div>

        <hr
          className={`border border-navItems my-4 ${
            !slide ? " w-[30%] mx-auto" : "w-100%"
          }`}
        />

        {/* Nav Items */}
        <div className="flex flex-col">
          {navItems1.map((item, index) => {
            // 🔹 DASHBOARD (Parent)
            if (item.title === "Dashboards") {
              return (
                <div key={index}>
                  <NavLink
                    to={"/dashboard"}
                    onClick={() => {
                      if (item.title === "Dashboards") {
                        setDashboardOpen((pre) => !pre);
                        setIsOpen((prev) => !prev);
                      }
                    }}
                    className={`flex items-center ${
                      !slide ? "justify-center" : "justify-between"
                    } h-12 px-5 cursor-pointer hover:bg-[#4F4F52]
                      ${dashboardOpen ? "bg-[#4F4F52] font-bold" : ""}
                      `}
                  >
                    <div className="flex items-center  gap-5">
                      <div className="w-5">{item.svg}</div>
                      {slide && (
                        <span className="text-sm text-navItems">
                          {item.title}
                        </span>
                      )}
                    </div>

                    {/* rotate arrow */}
                    {slide && (
                      <div
                        className={`transition-transform duration-300 ease-in-out ${
                          dashboardOpen ? "rotate-180" : ""
                        }`}
                      >
                        {BottomArrow}
                      </div>
                    )}
                  </NavLink>

                  {/* 🔽 DROPDOWN ITEMS */}
                  {dashboardOpen && (
                    <div
                      className={`flex flex-col gap-1 ${
                        !slide ? "items-center" : ""
                      } `}
                    >
                      <NavLink
                        to={"/dashboard/analytics"}
                        className={({ isActive }) =>
                          ` ${
                            isActive ? "bg-[#E91F63] font-bold" : ""
                          } h-10  px-5 flex items-center text-sm text-navItems hover:text-white `
                        }
                      >
                        {AIcon}
                        {slide && <span className="ml-3">Analytics</span>}
                      </NavLink>

                      <NavLink
                        to="/dashboard/smart-home"
                        className={({ isActive }) =>
                          ` ${
                            isActive ? "bg-[#E91F63] font-bold" : ""
                          } h-10  px-5 flex items-center text-sm text-navItems hover:text-white`
                        }
                      >
                        {Sicon}
                        {slide && <span className="ml-3">Smart Home</span>}
                      </NavLink>
                    </div>
                  )}
                </div>
              );
            }

            return null;
          })}
        </div>

        {/* Pages */}
        <h1 className="text-xs font-bold text-navItems my-4">Pages</h1>
        {navItems2.map((item, index) => (
          <div
            key={index}
            className={`flex  h-12 px-5 items-center ${
              !slide ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex gap-5 items-center">
              <div className="w-5">{item.svg}</div>
              {slide && (
                <span className="text-sm text-navItems">{item.title}</span>
              )}
            </div>
            {slide && <div>{item.svg2}</div>}
          </div>
        ))}

        <hr
          className={`border border-navItems my-4 ${
            !slide ? " w-[30%] mx-auto" : "w-100%"
          }`}
        />

        {/* Docs */}
        <h1 className="text-xs font-bold text-navItems my-4">DOCS</h1>
        {navItems3.map((item, index) => (
          <div
            key={index}
            className="flex justify-between h-12 px-5 items-center"
          >
            <div className="flex gap-5 items-center justify-center">
              <div>{item.svg}</div>
              {slide && (
                <span className="text-sm text-navItems">{item.title}</span>
              )}
            </div>
            {slide && <div>{item.svg2}</div>}
          </div>
        ))}
        <div className="text-navItems cursor-pointer flex items-center px-5 gap-2">
          {Logout}
          {slide && (
            <LogoutWarning
              modalShow={modalShow}
              setModalShow={setModalShow}
              setIsOpen={setIsOpen}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
