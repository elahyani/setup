import React, { FC } from "react";
import EChartsReact from "echarts-for-react";
import { transformChartOption } from "../../components/utils/dataTansform";

const Chart: FC<{ option: any }> = ({ option }) => {
  return (
    <>
      <EChartsReact
        style={{ width: "100%", height: "100%" }}
        option={transformChartOption(option)}
      />
    </>
  );
};

export default Chart;
