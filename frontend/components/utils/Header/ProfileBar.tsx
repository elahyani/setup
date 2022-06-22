import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const ProfileBar = () => {
  return (
    <div className="flex items-center justify-center m-2   lg:mr-10">
      <p className="rounded-full bg-[#178eb9] border border-white text-white font-bold w-8 h-8 flex items-center justify-center">
        P
      </p>
      <MdKeyboardArrowDown size="1.5rem" className="text-[#51bde4]" />
    </div>
  );
};

export default ProfileBar;
