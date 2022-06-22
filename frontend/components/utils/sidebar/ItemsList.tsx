import { useRouter } from "next/router";
import React from "react";
import { sidebarItems } from "../data/sidebarItems";
import SingleItem from "./SingleItem";

const ItemsList = () => {
  const router = useRouter();
  return (
    <>
      <ul className="bg-[#2a3a47] overflow-auto">
        <li
          onClick={() => router.push("/admin")}
          className="w-[80px] md:w-[120px] h-[86px] flex justify-center items-center bg-[#32495b] text-white hover:cursor-pointer"
        >
          <img
            src="https://appli.hsabati.com/assets/images/img_fac/Hsabati-Logo-Sqr.png"
            alt="hsabati"
            className="w-[76px] h-[80px] p-6"
          />
        </li>
        {sidebarItems.map((item, index) => {
          return <SingleItem key={index} {...item} />;
        })}
      </ul>
    </>
  );
};

export default ItemsList;
