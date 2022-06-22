import React, { useRef } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const inputRef = useRef<any>(null);

  return (
    <div className="left-[45px] md:left-auto relative flex items-center justify-center">
      <input
        ref={inputRef}
        type="text"
        placeholder="search"
        className="p-2 text-lg lg:text-xl m-2 rounded w-[200px] sm:w-[300px] lg:w-[500px] focus:outline-[#51bde4]"
      />
      <FiSearch
        size={"1.8rem"}
        className="absolute right-4 cursor-pointer hover:text-[#51bde4] transition duration-300"
        onClick={() => inputRef.current.focus()}
      />
    </div>
  );
};

export default SearchBar;
