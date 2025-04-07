import React from "react";
import ReactApexChart from "react-apexcharts";

function ApexChartOne({ data }) {
  // Default to empty arrays if data is not provided
  const series = data?.map((item) => item.amount) || [];
  const labels = data?.map((item) => item.category) || [];

  const state = {
    series: series,
    options: {
      chart: {
        type: "donut",
      },
      colors: ["#94D1E0", "#F4BE37", "#5388D8", "#FF9F40", "#B0B7FF"],
      labels: labels,
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
      tooltip: {
        y: {
          formatter: (val, { seriesIndex }) => {
            const percentage = data[seriesIndex]?.percentage || "0";
            return `${val} (${percentage}%)`;
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: (val, opts) => {
          const percentage = data[opts.seriesIndex]?.percentage || "0";
          return `${percentage}%`;
        },
      },
    },
  };

  return (
    <div>
      <div id="chart">
        {series.length > 0 ? (
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="donut"
          />
        ) : (
          <div>No data available for chart</div>
        )}
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default ApexChartOne;