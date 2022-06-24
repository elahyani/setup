import React, { FC } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import CHARTS_OPTIONS from "../../data/charts.json";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const DragAndDropTest1: FC = () => {
  return (
    <ResponsiveReactGridLayout
      className="layout relative"
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={30}
    >
      {[1, 2, 3, 4, 5].map((option) => {
        return (
          <div
            style={{
              border: "2px solid red",
            }}
            className="absolute"
            key={option}
            data-grid={{
              x: option,
              y: option,
              w: option,
              h: option,
              // minW: 1,
              // maxW: 10,
              // moved: true,
              // isResizable: false,
              // isDraggable: true,
              // useCSSTransforms: false,
              // allowOverlap: false,
              // preventCollision: true,
            }}
          ></div>
        );
      })}
    </ResponsiveReactGridLayout>
  );
};

export default DragAndDropTest1;
