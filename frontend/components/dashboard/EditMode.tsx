import { FC, useRef, useState, useEffect } from "react";
import CHARTS_OPTIONS from "../../data/charts.json";
import DynamicChart from "../charts/Chart";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import EditModeButton from "../utils/Button";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const EditMode: FC = () => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const enableEditMode = () => {
    setIsEditMode(() => true);
  };

  const discardChanges = () => {
    setIsEditMode(() => false);
  };

  const saveChanges = () => {
    setIsEditMode(() => false);
  };

  return (
    <div
      onScroll={() => {
        console.log("scrolling");
        setIsEditMode(true);
      }}
      className="p-8 bg-gray-200 w-full h-full"
    >
      <div className="hidden lg:flex w-full items-center justify-end">
        {!isEditMode && (
          <EditModeButton clickEventFunc={enableEditMode} label={"Edit mode"} />
        )}
        {isEditMode && (
          <>
            <EditModeButton clickEventFunc={discardChanges} label={"Discard"} />
            <EditModeButton clickEventFunc={saveChanges} label={"Save"} />
          </>
        )}
      </div>
      <ResponsiveReactGridLayout
        className="layout h-full lg:h-screen"
        rowHeight={55}
        width={1400}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        resizeHandles={["s", "w", "e", "n", "sw", "nw", "se", "ne"]}
        isResizable={isEditMode}
        verticalCompact={true}
        isBounded={true}
        isDraggable={isEditMode}
      >
        {CHARTS_OPTIONS.map((option) => {
          const {
            title: { text: key },
            coords: { gridColumn: X, gridRow: Y },
          } = option;
          const xStart = X[0] - 1;
          const yStart = Y[0];
          const Wid = X[1];
          const Hei = Y[1];
          const { minHeight, minWidth } = option.coords.size;
          return (
            <div
              className="relative border border-[rgb(243,243,243)] rounded-xl lg:flex items-center justify-center shadow-md bg-white p-6 w-full"
              key={key}
              data-grid={{
                x: xStart,
                y: yStart,
                w: Wid,
                h: Hei,
                minW: minWidth,
                minH: minHeight,
                isBounded: true,
              }}
            >
              <DynamicChart option={option} />
              {isEditMode && (
                <div className="absolute hidden lg:block opacity-20 rounded-xl bg-blue-600 w-full h-full"></div>
              )}
            </div>
          );
        })}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export default EditMode;
