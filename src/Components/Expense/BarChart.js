// import React from "react";
// import Chart from "react-apexcharts";

// const BarChart = () => {
//   const options = {
//     chart: {
//       type: "bar",
//       height: 350,
//     },

//     plotOptions: {
//       bar: {
//         borderRadius: 4,
//         borderRadiusApplication: "end",
//         horizontal: true,
//       },
//     },
//     dataLabels: {
//       enabled: true,
//     },
//     xaxis: {
//       categories: [
//         "Grocery",
//         "Clothing",
//         "Personal Care",
//         "Insurance Bill ",
//         "Shopping",
//       ],
//     },
//     grid: {
//       xaxis: {
//         // lines: {
//         //   show: true,
//         // },
//       },
//     },
//     yaxis: {
//       reversed: false,
//       axisTicks: {
//         show: true,
//       },
//     },
//   };

//   const series = [
//     {
//       data: [400, 430, 448, 470, 540],
//     },
//   ];

//   return <Chart options={options} series={series} type="bar" height={350} />;
// };

// export default BarChart;
// import React from "react";
// import Chart from "react-apexcharts";

// const BarChart = () => {
//   const options = {
//     chart: {
//       type: "bar",
//       height: 350,
//     },

//     plotOptions: {
//       bar: {
//         borderRadius: 7.423,
//         borderRadiusApplication: "end",
//         horizontal: true,
//         dataLabels: {
//           position: "top", // Position the data labels at the end of the bars
//         },
//       },
//     },
//     fill: {
//       colors: ["#D4E2EE"],
//     },
//     states: {
//       hover: {
//         filter: {
//           type: "none", // No filter on hover
//         },
//       },
//     },
//     dataLabels: {
//       enabled: true,
//       formatter: function (val) {
//         return val;
//       },
//       offsetX: -30, // Add left margin of 10px
//       style: {
//         colors: ["#002140"],
//       },
//     },
//     xaxis: {
//       categories: [
//         "Grocery",
//         "Clothing",
//         "Personal Care",
//         "Insurance Bill ",
//         "Shopping",
//       ],
//     },
//     grid: {
//       xaxis: {
//         // lines: {
//         //   show: true,
//         // },
//       },
//     },
//     yaxis: {
//       reversed: false,
//       axisTicks: {
//         show: true,
//       },
//     },
//   };

//   const series = [
//     {
//       data: [400, 430, 448, 470, 540],
//     },
//   ];

//   return <Chart options={options} series={series} type="bar" height={350} />;
// };

// export default BarChart;
// import React from "react";
// import Chart from "react-apexcharts";

// const BarChart = () => {
//   const options = {
//     chart: {
//       type: "bar",
//       height: 350,
//     },

//     plotOptions: {
//       bar: {
//         borderRadius: 7.423,
//         borderRadiusApplication: "end",
//         horizontal: true,
//       },
//     },
//     fill: {
//       colors: ["#D4E2EE"],
//     },
//     states: {
//       hover: {
//         filter: {
//           type: "none", // No filter on hover
//         },
//       },
//     },
//     dataLabels: {
//       //   enabled: true,
//       formatter: function (val, opts) {
//         const category = opts.w.globals.labels[opts.dataPointIndex];
//         return `${category}`;
//       },
//       offsetX: -100, // Add left margin of 10px
//       style: {
//         colors: ["#002140"],
//       },
//       textAnchor: "start",
//     },
//     xaxis: {
//       categories: [
//         "Grocery",
//         "Clothing",
//         "Personal Care",
//         "Insurance Bill ",
//         "Shopping",
//       ],
//     },
//     grid: {
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//     },
//     yaxis: {
//       reversed: false,
//       axisTicks: {
//         show: true,
//       },
//     },
//     tooltip: {
//       enabled: true,
//       y: {
//         formatter: function (val) {
//           return val;
//         },
//       },
//     },
//   };

//   const series = [
//     {
//       data: [400, 430, 448, 470, 540],
//     },
//   ];

//   return <Chart options={options} series={series} type="bar" height={350} />;
// };

// export default BarChart;
import React from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 600,
    },

    plotOptions: {
      bar: {
        borderRadius: 7.423,
        borderRadiusApplication: "end",
        horizontal: true,
        dataLabels: {
          position: "top", // Position the data labels at the end of the bars
        },
      },
    },
    fill: {
      colors: ["#D4E2EE"],
    },
    states: {
      hover: {
        filter: {
          type: "none", // No filter on hover
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val;
      },
      offsetX: -30, // Add left margin of 10px
      style: {
        colors: ["#002140"],
      },
    },
    xaxis: {
      categories: [
        "Grocery",
        "Clothing",
        "Personal Care",
        "Insurance Bill ",
        "Shopping",
      ],
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    yaxis: {
      reversed: false,
      axisTicks: {
        show: false,
      },
    },
  };

  const series = [
    {
      data: [400, 430, 448, 470, 540],
    },
  ];

  return <Chart options={options} series={series} type="bar" height={350} />;
};

export default BarChart;
