import React, { useEffect, useState } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

const BasicLayout = ({
  className = "layout",
  items = 20,
  rowHeight = 30,
  cols = 12,
}) => {
  const [slayout, setLayout] = useState();

  useEffect(() => {
    const layout = generateLayout();
    setLayout(layout);
  }, []);

  const generateDOM = () => {
    return _.map(_.range(items), function (i: any) {
      return (
        <div key={i}>
          <span className="text">{i}</span>
        </div>
      );
    });
  };

  const generateLayout = () => {
    const p = {
      className: "layout",
      items: 20,
      rowHeight: 30,
      onLayoutChange: function () {},
      cols: 12,
    };
    return _.map(new Array(p.items), function (item: any, i: any) {
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString(),
      };
    });
  };

  const onLayoutChange = (layout: any) => {
    onLayoutChange(layout);
  };

  return (
    <ReactGridLayout
      layout={slayout}
      onLayoutChange={onLayoutChange}
      className={"layout"}
      rowHeight={30}
      cols={12}
    >
      {generateDOM()}
    </ReactGridLayout>
  );
};

export default BasicLayout;
