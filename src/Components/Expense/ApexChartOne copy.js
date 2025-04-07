// ApexChartOne.jsx
import React from "react";
import ReactApexChart from "react-apexcharts";

function ApexChartOne({ data }) {
  const state = {
    series: data.map(item => item.value),
    options: {
      chart: {
        type: "donut",
      },
      colors: ["#94D1E0", "#F4BE37", "#5388D8", "#FF9F40", "#B0B7FF"],
      labels: data.map(item => item.name),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      legend: {
        position: "right",
        offsetY: 0,
        height: 230,
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default ApexChartOne;