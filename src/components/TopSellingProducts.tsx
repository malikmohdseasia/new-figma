import { greenIcon, redIcon } from "../assets/Icons";
import img1 from "../assets/LastComponent/image1.svg";
import img2 from "../assets/LastComponent/image2.svg";
import img4 from "../assets/LastComponent/image4.svg";
import img5 from "../assets/LastComponent/image5.svg";

const TopSellingProducts = () => {
  const titleItems = ["PRODUCT", "VALUE", "ADS SPENT", "REFUNDS"];

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

  return (
     <>
    <div className="shadow-[0px_2px_6px_0px_#00000040] p-5 rounded-xl">
      <h1 className="font-roboto text-dataColor font-bold mb-4 text-center lg:text-start">
        Top Selling Products
      </h1>

      {/* 🔹 Desktop Header */}
      <div className="hidden md:grid grid-cols-4 text-sm text-[#7B809A] mb-3">
        {titleItems.map((title, i) => (
          <div key={i}>{title}</div>
        ))}
      </div>

      <hr className="hidden md:block border-[#F0F2F5] my-3" />

      {/* 🔹 Rows */}
      <div className="flex flex-col gap-4 md:gap-0">
        {items.map((item, index) => (
          <div key={index}>
            {/* Desktop Row */}
            <div className="hidden md:grid grid-cols-4 items-center gap-4 py-3">
              <div className="flex gap-4 items-center">
                <img src={item.svg} className="w-10 h-10" />
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-[#7B809A]">{item.orders}</p>
                </div>
              </div>

              <p className="text-[#7B809A]">{item.value}</p>
              <p className="text-[#7B809A]">{item.ads}</p>
              <div className="flex items-center gap-2 text-[#7B809A]">
                {item.refund} {item.icon}
              </div>
            </div>

            {/* 📱 Mobile Card */}
            <div className="md:hidden border border-[#F0F2F5] rounded-lg p-4 space-y-3">
              <div className="flex gap-3 items-center">
                <img src={item.svg} className="w-10 h-10" />
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-sm text-[#7B809A]">{item.orders}</p>
                </div>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-[#7B809A]">Value</span>
                <span>{item.value}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-[#7B809A]">Ads Spent</span>
                <span>{item.ads}</span>
              </div>

              <div className="flex justify-between text-sm items-center">
                <span className="text-[#7B809A]">Refunds</span>
                <span className="flex gap-1 items-center">
                  {item.refund} {item.icon}
                </span>
              </div>
            </div>

            <hr className="hidden md:block border-[#F0F2F5] my-2" />
          </div>
        ))}
      </div>
    </div>

     <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-4">
      <p className="text-[#7B809A] text-sm text-center md:text-left">
        © 2022, made with ❤️ by{" "}
        <span className="font-bold">Creative Tim</span> for a better web.
      </p>

      <div className="flex gap-6">
        {["Creative Tim", "About Us", "Blog", "License"].map((item, index) => (
          <p
            key={index}
            className="text-sm text-[#7B809A] hover:text-gray-600 cursor-pointer"
          >
            {item}
          </p>
        ))}
      </div>
    </div>

   </>
  );
};

export default TopSellingProducts;
