import { HomeIcon, notificationIcon, notificationIcon2, ProfileIcon, settingIcon } from "../assets/Icons"
import Card from "./Card"
import ChartComponent from "./BarChart"
import BarChart from "./BarChart"
import AllChart from "./AllChart"
import TopSellingProducts from "./TopSellingProducts"

const Dashboard = ({isOpen}) => {


    const items =[{title:"profile", svg:ProfileIcon}, {title:"setting", svg:settingIcon}, {title:"notification", svg: notificationIcon, svg2:notificationIcon2}]
console.log(isOpen)
  return (

    <div className="p-5 ">
        {
            isOpen && <div>
    <div className="flex flex-col lg:flex-row justify-between">
        <div>
            <div className="flex items-center gap-2">

            {HomeIcon} <p>/</p>
            <p className="font-normal font-roboto text-sm text-[#7B809A]">Pages</p> <p>/</p>
            <p className="font-normal font-roboto text-sm text-dataColor">Analyics</p>
            </div>
            <h1 className="font-bold font-roboto text-dataColor my-2 lg:my-0">Analytics</h1>
        </div>

        <div className="flex flex-wrap gap-6 items-center">
           <div>
            <input type="search" name="" id="" placeholder="Search here" className="border border-[#7B809A] rounded-xl h-10.5 px-2
            font-roboto font-normal text-sm
            " />
           </div>
            
            {
                items.map((item, index)=>(
                    <div key={index} className="relative">
                        <div>{item.svg}
                            <div className="absolute -top-2 -right-5">{item.svg2}</div>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>

    <Card/>
   <AllChart/>
   <TopSellingProducts/>
   </div>
        }
    </div>

  )
}

export default Dashboard