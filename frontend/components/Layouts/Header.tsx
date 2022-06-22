import React from "react";
import SearchBar from "../utils/Header/SearchBar";
import ProfileBar from "../utils/Header/ProfileBar";
import ItemsLIst from "../utils/Header/ItemsLIst";

const Header = () => {
  return (
    <div className="bg-[#f3f3f3] border-b-2 flex items-center justify-between">
      <img
        src="https://appli.hsabati.com/assets/images/hsabati_logo_text.png"
        alt="hsabati"
        className="hidden md:block py-1 px-2 lg:py-3 w-[150px] h-[35px] lg:h-[auto] lg:w-auto lg:px-6 hover:cursor-pointer"
      />
      <SearchBar />
      <div className="flex">
        <ProfileBar />
        <ItemsLIst />
      </div>
    </div>
  );
};

export default Header;
