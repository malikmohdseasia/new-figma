import { greenIcon, redIcon } from "../assets/Icons";
import img1 from "../assets/LastComponent/image1.svg";
import img2 from "../assets/LastComponent/image2.svg";
import img4 from "../assets/LastComponent/image4.svg";
import img5 from "../assets/LastComponent/image5.svg";

const TopSellingProducts = () => {
  const titleItems = [
    { title: "PRODUCT" },
    { title: "VALUE" },
    { title: "ADS SPENT" },
    { title: "REFUNDS" },
  ];

  const items = [
    {
      title: "Nike v22 Running",
      svg: img1,
      orders: "8.232 orders",
      value: "$130.992",
      ads: "$9.500",
      refund: "13",
      icon: greenIcon,
    },
    {
      title: "Business Kit (Mug + Notebook)",
      svg: img2,
      orders: "12.821 orders",
      value: "$80.250",
      ads: "$4.200",
      refund: "40",
      icon: greenIcon,
    },
    {
      title: "Black Chair",
      svg: img2,
      orders: "2.421 orders",
      value: "$40.600",
      ads: "$9.430",
      refund: "54",
      icon: redIcon,
    },
    {
      title: "Wireless Charger",
      svg: img4,
      orders: "5.921 orders",
      value: "$91.300",
      ads: "$7.364",
      refund: "5",
      icon: greenIcon,
    },
    {
      title: "Mountain Trip Kit (Camera + Backpack)",
      svg: img5,
      orders: "921 orders",
      value: "$140.925",
      ads: "$20.531",
      refund: "121",
      icon: redIcon,
    },
  ];

  const footerItems = ["Creative Tim", "About Us", "Blog", "License"];

  return (
    <>
      <div className="shadow-[0px_2px_6px_0px_#00000040] p-5 rounded-xl">
  <h1 className="font-roboto text-dataColor font-bold mb-4">
    Top Selling Products
  </h1>

  {/* Table Header */}
  <div className="grid grid-cols-4 text-sm font-roboto text-[#7B809A] mb-3">
    {titleItems.map((item, index) => (
      <div key={index}>{item.title}</div>
    ))}
  </div>

  <hr className="border border-[#F0F2F5] my-3 w-full" />

  {/* Table Rows */}
  <div className="flex flex-col ">
    {items.map((item, index) => (
      <div key={index}>
        <div className="grid grid-cols-4 items-center text-sm font-roboto text-dataColor gap-4 py-2 ">
          {/* PRODUCT Column */}
          <div className="flex gap-4 items-center">
            <img
              src={item.svg}
              alt={item.title}
              className="w-10 h-10 object-contain"
            />
            <div>
              <p className="font-bold">{item.title}</p>
              <p className="font-normal text-[#7B809A]">{item.orders}</p>
            </div>
          </div>

          {/* VALUE Column */}
          <div>
            <p className="text-[#7B809A]">{item.value}</p>
          </div>

          {/* ADS SPENT Column */}
          <div>
            <p className="text-[#7B809A]">{item.ads}</p>
          </div>

          {/* REFUNDS Column */}
          <div className="flex items-center gap-2">
            <p className="text-[#7B809A]">{item.refund}</p>
            {item.icon}
          </div>
        </div>

        {/* Divider */}
        <hr className="border border-[#F0F2F5] my-2 w-full" />
      </div>
    ))}
  </div>
</div>


      <div className="flex items-center pt-20 justify-between">
        <p className="text-[#7B809A] ">
          © 2022, made with ❤️ by{" "}
          <span className="font-bold"> Creative Tim </span>for a better web.
        </p>
        <div className="flex items-center gap-7.75">
          {footerItems.map((item, index) => (
            <div key={index} className="">
              <p className="font-roboto text-sm text-[#7B809A]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopSellingProducts;
