// const option = {
//     // backgroundColor: '#2c343c',
//     title: {
//       text: 'Customized Pie',
//       left: 'center',
//       top: 20,
//       textStyle: {
//         color: '#ccc'
//       }
//     },
//     tooltip: {
//       trigger: 'item'
//     },
//     visualMap: {
//       show: false,
//       min: 80,
//       max: 600,
//       inRange: {
//         colorLightness: [0, 1]
//       }
//     },
//     series: [
//       {
//         name: 'Access From',
//         type: 'pie',
//         radius: '55%',
//         center: ['50%', '50%'],
//         data: [
//           { value: 335, name: 'Direct' },
//           { value: 310, name: 'Email' },
//           { value: 274, name: 'Union Ads' },
//           { value: 235, name: 'Video Ads' },
//           { value: 400, name: 'Search Engine' }
//         ].sort(function (a, b) {
//           return a.value - b.value;
//         }),
//         roseType: 'radius',
//         label: {
//           color: 'rgba(255, 255, 255, 0.3)'
//         },
//         labelLine: {
//           lineStyle: {
//             color: 'rgba(255, 255, 255, 0.3)'
//           },
//           smooth: 0.2,
//           length: 10,
//           length2: 20
//         },
//         itemStyle: {
//           color: '#c23531',
//           shadowBlur: 200,
//           shadowColor: 'rgba(0, 0, 0, 0.5)'
//         },
//         animationType: 'scale',
//         animationEasing: 'elasticOut',
//         animationDelay: function (idx: any) {
//           return Math.random() * 200;
//         }
//       }
//     ]
//   };

// export default option;
// const option = {
//   series: [
//     {
//       type: 'pie',
//       data: [
//         {
//           value: 335,
//           name: 'Direct Visit'
//         },
//         {
//           value: 234,
//           name: 'Union Ad'
//         },
//         {
//           value: 1548,
//           name: 'Search Engine'
//         }
//       ],
//       radius: '50%'
//     }
//   ]
// };
// export default option;
// const option = {
//   series: [
//     {
//       type: 'pie',
//       data: [
//         {
//           value:  86399999,
//           name: 'elapsedTime'
//         },
//         {
//           value:480467,
//           name: 'disconnectedTime'
//         },
//         {
//           value: 0,
//           name: 'timeLeft'
//         },
//          {
//           value: 85919532,
//           name: 'plannedProductionTime'
//         },
//         {
//           value: 14051411,
//           name: 'machinePartialRunningTime'
//         },
//         {
//           value: 51559062,
//           name: 'runningTime'
//         },
//         {
//           value: 20309059,
//           name: 'stoppageTime'
//         },
//       ],
//       radius: '50%'
//     }
//   ],
//   start: 1686623400000,
//   end: 1686709799999,
//   startStr: '13/06/2023, 8:00:00 am',
//   endStr: '14/06/2023, 7:59:59 am',
//   elapsedTime: 86399999,
//   disconnectedTime: 480467,
//   timeLeft: 0,
//   plannedProductionTime: 85919532,
//   machinePartialRunningTime: 14051411,
//   runningTime: 51559062,
//   stoppageTime: 20309059
// };

// export default option;
import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);

const option = {
  dataGroupId: '',
  animationDurationUpdate: 500,
  series: 
    {
      type: 'pie',
      id: 'sales',
      data: [
        {
          value:  100, // Represents 100% of the total
          groupId: 'Planned_Production_Time',
          
        },
        {
          value: 0, // Represents 0% of the total
          groupId: 'Time Left'
        }
      ],
      universalTransition: {
        enabled: true,
        divideShape: 'clone'
      }
    }
  };
  const drilldownData = [
    {
      dataGroupId: 'Planned_Production_Time',
      data: [
        ['running_time', 80, 'farm'],
        ['partially_running_time', 20, 'house']
      ]
    }
  ];
  const drilldownData2 =[
    {
      dataGroupId: 'farm',
      data: [['running',80], ['stops',0]]
    },
  ]
  let level = 0;
  myChart.on('click', function (event: { data: { groupId: string; }; }) {
    level = (level+1)%3;
    console.debug(level);
    if (event.data) {
      var subData = (level === 1 ? drilldownData : drilldownData2).find(function (data) {
        return data.dataGroupId === event.data.groupId;
      });
      if (!subData) {
        return;
      }
      myChart.setOption({
        xAxis: {
          data: subData.data.map(function (item) {
            return item[0];
          })
        },
        series: {
          type: 'pie',
          id: 'sales',
          dataGroupId: subData.dataGroupId,
          data: subData.data.map(function (item) {
            return { value: item[1] ,
                groupId: item[2] /* comment groupId and the universal transition works but not 2nd level drill */
            };
          }),
          universalTransition: {
            enabled: true,
            divideShape: 'clone'
          }
        },
        graphic: [
          {
            type: 'text',
            left: 50,
            top: 20,
            style: {
              text: 'Back',
              fontSize: 18
            },
            onclick: function () {
              level = -1;
              myChart.setOption(option);
            }
          }
        ]
      });
    }
  });
  option && myChart.setOption(option);
  export default option;