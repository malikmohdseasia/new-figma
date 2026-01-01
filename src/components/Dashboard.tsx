import {
  HomeIcon,
  notificationIcon,
  notificationIcon2,
  ProfileIcon,
  settingIcon,
} from "../assets/Icons";
import Card from "./Card";
import AllChart from "./AllChart";
import TopSellingProducts from "./TopSellingProducts";


const Dashboard = () => {


  const items = [
    { title: "profile", svg: ProfileIcon },
    { title: "setting", svg: settingIcon },
    { title: "notification", svg: notificationIcon, svg2: notificationIcon2 },
  ];

  
  return (
    <div className="p-5 h-screen overflow-y-auto no-scrollbar">
        <div>

            <div className="flex flex-col lg:flex-row justify-between  gap-4">
  <div>
    <div className="flex items-center gap-2">
      {HomeIcon} <p>/</p>
      <p className="font-normal font-roboto text-sm text-[#7B809A]">
        Pages
      </p>
      <p>/</p>
      <p className="font-normal font-roboto text-sm text-dataColor">
        Analytics
      </p>
    </div>

    <h1 className="font-bold font-roboto text-dataColor my-2 lg:my-0">
      Analytics
    </h1>
  </div>

  <div className="flex flex-row-reverse md:flex-row flex-wrap gap-4 items-center w-full lg:w-auto">
    <input
      type="search"
      placeholder="Search here"
      className="
        w-full
        sm:w-100 sm:mr-auto
        lg:w-72
        xl:w-80
        border border-[#7B809A]
        rounded-xl h-10.5 px-3
        font-roboto text-sm
        outline-none
      "
    />

    {items.map((item, index) => (
      <div key={index} className="relative">
       <p className="cursor-pointer"> {item.svg}</p>
        <div className="absolute -top-2 -right-5">
          {item.svg2}
        </div>
      </div>
    ))}
  </div>
</div>

          

          <Card />
          <AllChart />
          <TopSellingProducts />
        </div>

      
    </div>
  );
};

export default Dashboard;
