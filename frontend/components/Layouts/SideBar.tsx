import React, { FC, useState } from "react";
import ItemsList from "../utils/sidebar/ItemsList";
import { GoThreeBars } from "react-icons/go";

const SideBar: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      {/* mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen((state) => !state)}
          className="transition duration-300 fixedZZ left-0 top-0 bottom-0 bg-black bg-opacity-60 z-10"
        ></div>
      )}
      <div
        onClick={() => setIsSidebarOpen((state) => !state)}
        className={`
        transition duration-300 absolute left-0 top-0 flex md:hidden items-start justify-center mt-1 color-[#2a3a47] cursor-pointer hover:scale-90`}
      >
        <GoThreeBars size={"3rem"} className="text-[#178eb9]" />
      </div>
      <div
        className={`${
          isSidebarOpen
            ? "translate-x-[0px] opacity-1 fixed"
            : "-translate-x-[80px] opacity-0 absolute"
        } h-full overflow-auto z-20 block md:hidden transition duration-300 bg-[#2a3a47]`}
      >
        {isSidebarOpen && <ItemsList />}
      </div>

      {/* web */}
      <div className="absolute bg-[#2a3a47] hidden md:block h-full overflow-auto pb-[200px]">
        <ItemsList />
      </div>
    </>
  );
};

export default SideBar;
