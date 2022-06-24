import { FC, useState, useEffect } from "react";
import CHARTS_OPTIONS from "../../data/charts.json";
import DynamicChart from "../charts/Chart";

/*
 * Disable charts on scroll
 */

const Dahsboard: FC = () => {
  // const [isChartDisabled, setIsChartDisabled] = useState(false);

  //   const createScrollStopListener = (
  //     element: Window,
  //     callback: () => void,
  //     timeout = 200
  //   ) => {
  //     let handle: NodeJS.Timeout;
  //     let onScroll = () => {
  //       if (handle) {
  //         clearTimeout(handle);
  //       }
  //       handle = setTimeout(callback, timeout);
  //     };
  //     element.addEventListener("scroll", onScroll);
  //     return function () {
  //       element.removeEventListener("scroll", onScroll);
  //     };
  //   };

  //   const disbaleCharts = () => {
  //     setIsChartDisabled(true);
  //   };
  //   const enaleCharts = () => {
  //     setIsChartDisabled(false);
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", disbaleCharts);
  //     createScrollStopListener(window, enaleCharts);
  //     return () => {
  //       window.addEventListener("scroll", disbaleCharts);
  //       window.removeEventListener("scrollstop", enaleCharts);
  //     };
  //   }, [isChartDisabled]);

  return (
    <div
      onScroll={() => {
        console.log("scrolling");
        // setIsChartDisabled(true);
      }}
      className="p-8 bg-gray-200 w-full h-full"
    >
      <div className="flex flex-wrap justify-center lg:grid lg:grid-cols-12 lg:grid-rows-12 h-full lg:h-screen gap-2">
        {CHARTS_OPTIONS.map((option, index) => {
          const { coords } = option;
          return (
            <div
              key={index}
              style={{
                gridColumn: `${coords.gridColumn[0]}/ span ${coords.gridColumn[1]}`,
                gridRow: `${coords.gridRow[0]}/ span ${coords.gridRow[1]}`,
                // gridColumnStart: option.coords.gridColumn[0],
                // gridColumnEnd: option.coords.gridColumn[1],
                // gridRowStart: option.coords.gridRow[0],
                // gridRowEnd: option.coords.gridRow[1],
              }}
              className={`${
                option.removeOnMobile === 1 ? "hidden" : "flex"
              } relative lg:flex justify-center items-center rounded-xl border border-[rgb(243,243,243)] shadow-md bg-white p-4 w-full h-[25rem] lg:h-full`}
            >
              <DynamicChart option={option} />
              {/* {isChartDisabled && (
                  <div className="absolute opacity-50 bg-red-200 w-full h-full"></div>
                )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dahsboard;
