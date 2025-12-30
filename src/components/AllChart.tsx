import { WatchIcon } from "../assets/Icons";
import BarChart from "./BarChart";

const AllChart = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6 my-10">
      <div className="shadow-[0px_2px_6px_0px_#00000040] rounded-lg p-4">
        <div className="-mt-10 ">
          <BarChart
            data={[45, 18, 10, 22, 48, 8, 38]}
            categories={["M", "T", "W", "T", "F", "S", "S"]}
            background="linear-gradient(180deg, #E93B77 0%, #DA1F63 100%)"
            type="column"
            tickInterval={20}
            max={60}
          />
        </div>

        <div className="mt-6.5 ">
          <p className="font-roboto text-dataColor font-bold">Website Views</p>
          <p className="font-roboto text-[#7B809A] text-sm font-normal">
            Last Campaign Performance
          </p>
        </div>
        <hr className="border border-[#F0F2F5] my-4" />

        <div className="flex gap-1 items-center">
          {WatchIcon}
          <p className="font-normal text-sm font-roboto text-[#7B809A]">
            campaign sent 2 days ago
          </p>
        </div>
      </div>

      <div className="shadow-[0px_2px_6px_0px_#00000040] rounded-lg p-4 ">
        <div className="-mt-10">
          <BarChart
            data={[25, 18, 240, 260, 450, 320, 190, 210, 500]}
            categories={[
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]}
            background="linear-gradient(180deg, #63B967 0%, #4BA64F 100%)"
            shadow="0px 2px 6px 0px #DC22655C"
            type="line"
            tickInterval={200}
            max={600}
          />
        </div>
         <div className="mt-6.5">
          <p className="font-roboto text-dataColor font-bold">Daily Sales</p>
          <p className="font-roboto text-[#7B809A] text-sm font-normal">
           (+15%) increase in today sales.
          </p>
        </div>
        <hr className="border border-[#F0F2F5] my-4" />

        <div className="flex gap-1 items-center">
          {WatchIcon}
          <p className="font-normal text-sm font-roboto text-[#7B809A]">
            updated 4 min ago
          </p>
        </div>
      </div>

      <div className="shadow-[0px_2px_6px_0px_#00000040] rounded-lg p-4">
        <div className="-mt-10 ">
          <BarChart
            data={[25, 18, 240, 260, 450, 320, 190, 210, 500]}
            categories={[
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]}
            background="linear-gradient(180deg, #3E3D45 0%, #202020 100%)"
            shadow="0px 2px 6px 0px #DC22655C"
            type="line"
            tickInterval={200}
            max={600}
          />
        </div>
         <div className="mt-6.5">
          <p className="font-roboto text-dataColor font-bold">Completed Tasks</p>
          <p className="font-roboto text-[#7B809A] text-sm font-normal">
          Last Campaign Performance
          </p>
        </div>
        <hr className="border border-[#F0F2F5] my-4" />

        <div className="flex gap-1 items-center">
          {WatchIcon}
          <p className="font-normal text-sm font-roboto text-[#7B809A]">
          just updated
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllChart;
