import { FC } from "react";
import { useRouter } from "next/router";

interface ListItemProps {
  text: string;
  icon: string;
  routerTo: string;
}

const SingleItem: FC<ListItemProps> = ({ text, icon, routerTo }) => {
  const router = useRouter();
  return (
    <li
      onClick={() => router.push(routerTo)}
      className={` ${
        router.pathname === routerTo
          ? "bg-[#004458] brightness-200"
          : "bg-[#2a3a47]"
      } w-[80px] md:w-[120px] h-[80px] md:h-[90px] flex justify-center items-center text-white py-4 hover:cursor-pointer hover:bg-[#004458] hover:text-white hover:brightness-200 transition duration-300`}
    >
      <div className="flex flex-col items-center">
        <i className={`content-[url(${icon})]`}></i>
        <p className="mt-2 hidden md:block">{text}</p>
      </div>
    </li>
  );
};

export default SingleItem;
