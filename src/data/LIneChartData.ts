// const lineChartData = {
//     filledBottlesData: {
//       xAxisData: [
//         "12/05/23, 8:00 a.m.",
//         "12/05/23, 10:00 a.m.",
//         "12/05/23, 12:00 a.m.",
//         "12/05/23, 2:00 p.m.",
//         "12/05/23, 4:00 p.m.",
//         "12/05/23, 6:00 p.m.",
//       ],
//       seriesData: [10780, 10790, 31235, 47856, 58596, 58670],
//     },
//     cipData: {
//       xAxisData: [
//         "8:00",
//         "10:00",
//         "12:00",
//         "2:00",
//         "4:00",
//         "6:00",
//       ],
//       seriesData: [
//         "23000",
//         "53482",
//         "83672",
//         "110938",
//         "120938",
//         "278933",
//       ],
//     },
//     labellerProductionData: {
//       xAxisData: [
//         "8:00",
//         "10:00",
//         "12:00",
//         "2:00",
//         "4:00",
//         "6:00",        
//       ],
//       seriesData: [
//         "25890",
//         "59872",
//         "98772",
//         "150832",
//         "180642",
//         "200982",
        
//       ],
//     },
//     goodCasesData: {
//       xAxisData: [
//         "8:00",
//         "10:00",
//         "12:00",
//         "2:00",
//         "4:00",
//         "6:00",
//       ],
//       seriesData: [
//         "18000",
//         "22093",
//         "48792",
//         "76829",
//         "123674",
//         "156901"
//       ],
//     },
//   };
  
//   export default lineChartData;
const LineChart = {
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};
export default LineChart;