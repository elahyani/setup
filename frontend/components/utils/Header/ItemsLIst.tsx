import React from "react";
import { headerItems } from "../data/headerItemsData";
import HeaderItem from "./SingleItem";

const ItemsLIst = () => {
  return (
    <>
      <ul className="hidden lg:flex items-center justify-center">
        {headerItems.map((item, index) => {
          return <HeaderItem key={index} {...item} />;
        })}
      </ul>
    </>
  );
};

export default ItemsLIst;
