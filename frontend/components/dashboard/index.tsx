import type { FC } from "react";
import CHARTS_OPTIONS from "../../data/charts.json";
import DynamicChart from "../charts/Chart";

const Dahsboard: FC = () => {
  return (
    <div className="p-8 bg-gray-100 w-full h-full">
      <div className="flex flex-wrap justify-center lg:grid lg:grid-cols-12 lg:grid-rows-12 h-full lg:h-screen gap-2">
        {CHARTS_OPTIONS.map((option, index) => {
          return (
            <div
              key={index}
              style={{
                gridColumnStart: option.coords.gridColumn[0],
                gridColumnEnd: option.coords.gridColumn[1],
                gridRowStart: option.coords.gridRow[0],
                gridRowEnd: option.coords.gridRow[1],
              }}
              className={`${
                option.removeOnMobile === 1 ? "hidden" : "flex"
              } lg:flex justify-center items-center rounded-xl border border-[rgb(243,243,243)] shadow-md bg-white p-4 w-full h-[25rem] lg:h-full`}
            >
              <DynamicChart option={option} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dahsboard;
