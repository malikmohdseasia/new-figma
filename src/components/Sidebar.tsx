import { NavLink } from "react-router-dom";
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

const Sidebar = () => {
  const navItems1 = [
    { title: "Dashboards", svg: DashboardIcon, svg2: BottomArrow, route:"dashboard" },
    { title: "Analytics", svg: AIcon },
    { title: "Smart Home", svg: Sicon },
  ];

  const navItems2 = [
    { title: "Pages", svg: PagesIcon, svg2: BottomArrow },
    { title: "Applications", svg: ApplicationIcon, svg2: BottomArrow },
    { title: "Ecommerce", svg: EcommerceIcon, svg2: BottomArrow },
    { title: "Authentication", svg: AuthIcon, svg2: BottomArrow },
    { title: "Error", svg: Eicon, svg2: BottomArrow },
    { title: " Error 404", svg: BIcon },
    { title: "Error 500", svg: Cicon },
  ];

  const navItems3 = [
    { title: "Basic", svg: BasicIcon, svg2: BottomArrow },
    { title: "Components", svg: ComponentIcon, svg2: BottomArrow },
    { title: "Changelog", svg: changelogIcon },
  ];

  return (
    <div className="bg-[linear-gradient(180deg,#3E3D45_0%,#202020_100%)] p-4 w-62.5 rounded-xl">
      <div className="flex items-center gap-2">
        {smileIcons}
        <h1 className="text-sm text-navItems font-roboto font-bold tracking-wide">
          Material Dashboard 2 PRO
        </h1>
      </div>

      <hr className="border border-navItems my-4" />

      <div className="flex justify-between items-center gap-2 px-5">
        <div className="flex gap-2 items-center">
          <img
            src={ProfileImg}
            alt=""
            className="w-8 h-8 rounded-full object-center"
          />
          <h1 className="text-sm text-navItems font-roboto font-light tracking-wide">
            Brooklyn Alice
          </h1>
        </div>
        {BottomArrow}
      </div>

      <hr className="border border-navItems my-4" />

      <div className="flex flex-col ">
        {navItems1.map((item, index) => (
          <NavLink
          to={item.route}
            key={index}
            className={`flex items-center justify-between  h-12  px-5 ${
              item.title === "Dashboards" ? "bg-[#4F4F52]" : "bg-[#E91F63]"
            }
`}      
          >
            <div className="flex items-center gap-5 text-center">
              <div className="w-5 ">{item.svg}</div>
              <h1 className="font-roboto text-navItems font-normal text-sm">
                {item.title}
              </h1>
            </div>
            <div className="">{item.svg2}</div>
          </NavLink>
        ))}
      </div>

      <div>
        <h1 className="font-roboto text-[12px] font-bold text-navItems my-4">
          Pages
        </h1>
        <div className="flex flex-col">
          {navItems2.map((item, index) => (
            <div
              key={index}
              className="flex justify-between h-12 px-5  items-center"
            >
              <div className="flex gap-5  items-center">
                <div className="w-5 ">{item.svg}</div>
                <h1 className="font-roboto text-navItems font-normal text-sm">
                  {item.title}
                </h1>
              </div>
              <div>{item.svg2}</div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border border-navItems my-3" />
      <div>
        <h1 className="font-roboto text-[12px] font-bold text-navItems my-4">
          DOCS
        </h1>

        <div className="flex flex-col">
          {navItems3.map((item, index) => (
            <div
              key={index}
              className="flex justify-between h-12 px-5  items-center"
            >
              <div className="flex gap-5  items-center">
                <div className="w-5 ">{item.svg}</div>
                <h1 className="font-roboto text-navItems font-normal text-sm">
                  {item.title}
                </h1>
              </div>
              <div>{item.svg2}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
