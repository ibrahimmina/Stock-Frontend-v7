import React from "react";
import { Chart } from "react-google-charts";

const WorldChart = (props) => {
  const options = {
    colorAxis: { minValue: -1, maxValue: 1 },
  };
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = props.data[selection[0].row + 1];
            window.location = "country/" + region[0];
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="70%px"
      options={options}
      data={props.data}
    />
  );
};

export default WorldChart;
