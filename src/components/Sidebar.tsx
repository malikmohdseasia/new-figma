import { useState } from "react";
import { NavLink} from "react-router-dom";
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

const Sidebar = ({ setIsOpen, setModalShow }: any) => {
  const [open, setOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [slide, setSlide] = useState<Boolean>(false);


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

  
  return (
    <>
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
        className={`hidden lg:flex absolute top-5 rotate-180 ${slide ? "left-64" : "left-20"
          } z-50
          transition-all duration-300 ease-in-out
         `}
        onClick={() => setSlide((pre) => !pre)}
      >
        {ArrowRight}
      </div>

     

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

        <div onClick={() => setOpen(false)} className="absolute top-3 right-2 lg:hidden">{CicleCross}</div>
        <div
          className={`flex items-center gap-2 ${!slide ? "px-4 justify-center" : "px-0"
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
          className={`border border-navItems my-4 ${!slide ? " w-[30%] mx-auto" : "w-100%"
            }`}
        />

        <div className="flex justify-between items-center px-5">
          <div className="flex gap-2 items-center">
            <img src={ProfileImg} className="w-8 h-8 rounded-full" />
            {slide && <h1 className="text-sm text-navItems">Brooklyn Alice</h1>}
          </div>
          {slide && <div>{BottomArrow}</div>}
        </div>

        <hr
          className={`border border-navItems my-4 ${!slide ? " w-[30%] mx-auto" : "w-100%"
            }`}
        />

        <div className="flex flex-col">
          {navItems1.map((item, index) => {
            if (item.title === "Dashboards") {
              return (
                <div key={index}>
                  <NavLink
                    to={"/dashboard"}
                    onClick={() => {
                      if (item.title === "Dashboards") {
                        setDashboardOpen((pre) => !pre);
                        setIsOpen((prev:any) => !prev);
                      }
                    }}
                    className={`flex items-center ${!slide ? "justify-center" : "justify-between"
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

                    {slide && (
                      <div
                        className={`transition-transform duration-300 ease-in-out ${dashboardOpen ? "rotate-180" : ""
                          }`}
                      >
                        {BottomArrow}
                      </div>
                    )}
                  </NavLink>

                  {dashboardOpen && (
                    <div
                      className={`flex flex-col gap-1 ${!slide ? "items-center" : ""
                        } `}
                    >
                      <NavLink
                        to={"/dashboard/analytics"}
                        className={({ isActive }) =>
                          ` ${isActive ? "bg-[#E91F63] font-bold" : ""
                          } h-10  px-5 flex items-center text-sm text-navItems hover:text-white `
                        }
                      >
                        {AIcon}
                        {slide && <span className="ml-3">Analytics</span>}
                      </NavLink>

                      <NavLink
                        to="/dashboard/smart-home"
                        className={({ isActive }) =>
                          ` ${isActive ? "bg-[#E91F63] font-bold" : ""
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

        <h1 className="text-xs font-bold text-navItems my-4">Pages</h1>
        {navItems2.map((item, index) => (
          <div
            key={index}
            className={`flex  h-12 px-5 items-center ${!slide ? "justify-center" : "justify-between"
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
          className={`border border-navItems my-4 ${!slide ? " w-[30%] mx-auto" : "w-100%"
            }`}
        />

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
        <div
          className="text-navItems cursor-pointer flex items-center px-5 gap-2 hover:text-red-500 transition"
          onClick={() => setModalShow(true)}
        >
          {Logout}
          {slide && <span>Logout</span>}
        </div>

      </div>
    </>
  );
};

export default Sidebar;
