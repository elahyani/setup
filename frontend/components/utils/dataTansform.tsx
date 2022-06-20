export const transformLine = (data: any) => {
  return data;
};

export const transformBar = (data: any) => {
  return data;
};

export const transformPie = (data: any) => {
  return data;
};

export const transformChartOption = (option: any) => {
  const type = option.type;

  if (type === "line") {
    return { ...option, series: transformLine(option.series) };
  }
  if (type === "bar") {
    return { ...option, series: transformBar(option.series) };
  }
  if (type === "pie") {
    return { ...option, series: transformPie(option.series) };
  }
  return option;
};
