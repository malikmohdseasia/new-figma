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
} from "../assets/Icons";
import ProfileImg from "../assets/sidebar/Image1.svg";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [open, setOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const navigate  = useNavigate();

  const navItems1 = [
    { title: "Dashboards", svg: DashboardIcon, svg2: BottomArrow, route: "/dashboard" },
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

  const handleLogout = ()=>{
    localStorage.clear('userEmail');
    navigate('/')
  }

  return (
    <>
      {/* 🔹 Hamburger Button (Mobile Only) */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 right-2 z-50 text-gray-500 text-2xl"
      >
        ☰
      </button>

      {/* 🔹 Overlay for Mobile */}

      {/* 🔹 Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 z-50 no-scrollbar
          h-screen overflow-y-auto
        bg-[linear-gradient(180deg,#3E3D45_0%,#202020_100%)]
        p-4 w-64 rounded-none lg:rounded-xl
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          {smileIcons}
          <h1 className="text-sm text-navItems font-bold">
            Material Dashboard 2 PRO
          </h1>
        </div>

        <hr className="border border-navItems my-4" />

        {/* Profile */}
        <div className="flex justify-between items-center px-5">
          <div className="flex gap-2 items-center">
            <img src={ProfileImg} className="w-8 h-8 rounded-full" />
            <h1 className="text-sm text-navItems">Brooklyn Alice</h1>
          </div>
          {BottomArrow}
        </div>

        <hr className="border border-navItems my-4" />

        {/* Nav Items */}
        <div className="flex flex-col">
          {navItems1.map((item, index) => {
            // 🔹 DASHBOARD (Parent)
            if (item.title === "Dashboards") {
              return (
                <div key={index}>
                  <div
                    onClick={() => {
                      if(item.title==='Dashboards'){
                        setDashboardOpen((pre)=>!pre);
                        setIsOpen((prev)=>!prev)
                      }
                    }}
                    className={`flex items-center justify-between h-12 px-5 cursor-pointer hover:bg-[#4F4F52]
                      ${dashboardOpen ? "bg-[#4F4F52]":""}
                      `}
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-5">{item.svg}</div>
                      <span className="text-sm text-navItems">{item.title}</span>
                    </div>

                    {/* rotate arrow */}
                    <div
                      className={`transition-transform duration-300 ease-in-out ${dashboardOpen ? "rotate-180" : ""
                        }`}
                    >
                      {BottomArrow}
                    </div>
                  </div>

                  {/* 🔽 DROPDOWN ITEMS */}
                  {dashboardOpen && (
                    <div className="ml-10 flex flex-col gap-1 ">
                      <NavLink
                        to="/analytics"
                        className="h-10 flex items-center text-sm text-navItems hover:text-white"
                      >
                        {AIcon}
                        <span className="ml-3">Analytics</span>
                      </NavLink>

                      <NavLink
                        to="/smart-home"
                        className="h-10 flex items-center text-sm text-navItems hover:text-white"
                      >
                        {Sicon}
                        <span className="ml-3">Smart Home</span>
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
          <div key={index} className="flex justify-between h-12 px-5 items-center">
            <div className="flex gap-5 items-center">
              <div className="w-5">{item.svg}</div>
              <span className="text-sm text-navItems">{item.title}</span>
            </div>
            {item.svg2}
          </div>
        ))}

        <hr className="border border-navItems my-3" />

        {/* Docs */}
        <h1 className="text-xs font-bold text-navItems my-4">DOCS</h1>
        {navItems3.map((item, index) => (
          <div key={index} className="flex justify-between h-12 px-5 items-center">
            <div className="flex gap-5 items-center">
              <div className="w-5">{item.svg}</div>
              <span className="text-sm text-navItems">{item.title}</span>
            </div>
            {item.svg2}
          </div>
        ))}
        <div className="text-navItems cursor-pointer">

        <button
        onClick={handleLogout}
        >
          Logout
        </button>

         
        </div>
      </div>
    </>
  );
};

export default Sidebar;
