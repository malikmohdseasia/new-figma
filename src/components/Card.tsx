import { contact, contacts, graphIcon, shop } from "../assets/Icons";

const Card = () => {
  const items = [
    {
      title: "Bookings",
      svg: contact,
      details: "281",
      perecentage: "+55%",
      details2: "than last week",
     gradient:"bg-gradient-to-b from-[#3E3D45] to-[#202020]"
    },
    {
      title: "Today’s Users",
      svg: graphIcon,
      details: "2,300",
      perecentage: "+3%",
      details2: "than last week",
      gradient:"bg-gradient-to-b from-[#E93B77] to-[#DA1F63]"
    },
    {
      title: "Revenue",
      svg: shop,
      details: "34k",
      perecentage: "+1%",
      details2: "than yesterday",
      gradient:"bg-gradient-to-b from-[#63B967] to-[#4BA64F]"
    },
    {
      title: "Followers",
      svg: contacts,
      details: "+91",
      details2: "Just updated",
       gradient:"bg-gradient-to-b from-[#439DEE] to-[#1E78E9]"
    },
  ];

  return (
    <div className="my-8 flex gap-5 ">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-xl p-3 flex-1 shadow-[0px_2px_6px_0px_#00000040]"
        >
          <div className="relative">
            <div
              className={`absolute flex items-center justify-center rounded-xl w-16 h-16 -top-8 
                ${item.gradient}
                `}
            >
              {item.svg}
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="font-light text-sm font-roboto text-[#7B809A]">
              {item.title}
            </p>
            <p className="font-roboto text-[24px] font-bold text-dataColor">
              {item.details}
            </p>
          </div>
          <hr className="border border-[#F0F2F5] my-3 w-full" />

          <div className="flex gap-1 items-center">
            <p className="text font-bold text-[#4CAF50] font-roboto">
              {item.perecentage}
            </p>
            <p className="text-dataColor font-roboto  font-light">
              {item.details2}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
