// import React, { useState } from "react";
// import LineChart from "../components/EchartRenderer";
// import lineChartData from "../data/LIneChartData";
// import ChartWrapper from '../components/ChartWrapper';
// import pieChartOptions from '../data/pieChartOptions';
// import EchartRenderer from "../components/EchartRenderer";


// const App: React.FC = () => {
//   const [selectedData, setSelectedData] = useState("filled bottles");

//   const handleDataChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedData(e.target.value);
//   };

//   // let data: { xAxisData: string[]; seriesData: string[] | number[] } | undefined;
//   // switch (selectedData) {
//   //   case "filled bottles":
//   //     data = lineChartData.filledBottlesData;
//   //     break;
//   //   case "CIP":
//   //     data = lineChartData.cipData;
//   //     break;
//   //   case "Labeller production":
//   //     data = lineChartData.labellerProductionData;
//   //     break;
//   //   case "Number of Good Cases":
//   //     data = lineChartData.goodCasesData;
//   //     break;
//   //   default:
//   //     data = undefined;
//   //     break;
//   // }

//   // const options = {
//   //   title: {
//   //     text: 'Stacked Line'
//   //   },
//   //   tooltip: {
//   //     trigger: 'axis'
//   //   },
//   //   legend: {
//   //     data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
//   //   },
//   //   grid: {
//   //     left: '3%',
//   //     right: '4%',
//   //     bottom: '3%',
//   //     containLabel: true
//   //   },
//   //   toolbox: {
//   //     feature: {
//   //       saveAsImage: {}
//   //     }
//   //   },
//   //   xAxis: {
//   //     type: 'category',
//   //     boundaryGap: false,
//   //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   //   },
//   //   yAxis: {
//   //     type: 'value'
//   //   },
//   //   series: [
//   //     {
//   //       name: 'Email',
//   //       type: 'line',
//   //       stack: 'Total',
//   //       data: [120, 132, 101, 134, 90, 230, 210]
//   //     },
//   //     {
//   //       name: 'Union Ads',
//   //       type: 'line',
//   //       stack: 'Total',
//   //       data: [220, 182, 191, 234, 290, 330, 310]
//   //     },
//   //     {
//   //       name: 'Video Ads',
//   //       type: 'line',
//   //       stack: 'Total',
//   //       data: [150, 232, 201, 154, 190, 330, 410]
//   //     },
//   //     {
//   //       name: 'Direct',
//   //       type: 'line',
//   //       stack: 'Total',
//   //       data: [320, 332, 301, 334, 390, 330, 320]
//   //     },
//   //     {
//   //       name: 'Search Engine',
//   //       type: 'line',
//   //       stack: 'Total',
//   //       data: [820, 932, 901, 934, 1290, 1330, 1320]
//   //     }
//   //   ]
//   // };

//   return (
//     <div>

// <div className='flex justify-between items-center px-4 py-2 bg-gray-200'> 
// <h1 className='text-lg font-semibold'>Production Trend</h1>
// <select 
// value={selectedData}

// onChange={handleDataChange}

// className='px-4 py-2 bg-white border border-gray-300 rounded-md'>
//   <option value='filled bottles'>Filled Bottles</option>

// <option value='CIP'>CIP</option>

// <option value='Labeller production' >Labeller Production</option> 
// <option value='Number of Good Cases'>Number of Good Cases</option>
// </select>
// </div>

// <div className='p-3'>{data && <LineChart option={options} />}</div>

// <ChartWrapper title="Pie Chart">
//   <EchartRenderer option={pieChartOptions} />
// </ChartWrapper>
// </div >
//   );
// };



// export default App;

// import React, {useState} from "react";
// import lineChartData from '../data/LIneChartData';
// import ChartWrapper from '../components/ChartWrapper';
// import EchartRenderer from "../components/EchartRenderer";
// import lineChartOptions from '../data/LIneChartData';
// import pieChartOptions from '../data/pieChartOptions';


// const App: React.FC = () => {
//   return (
//     <div className='p-3 flex flex-col space-y-6'>
//       <ChartWrapper title='Production Trend'>
//         <EchartRenderer option={lineChartOptions} />
//       </ChartWrapper>
//       <ChartWrapper title='Pie Chart'>
//         <EchartRenderer option={pieChartOptions} />
//       </ChartWrapper>
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
// import lineChartData from '../data/LIneChartData';
import ChartWrapper from '../components/ChartWrapper';
import EchartRenderer from "../components/EchartRenderer";
// import lineChartOptions from '../data/LIneChartData';
import pieChartOptions from '../data/pieChartOptions';

const App: React.FC = () => {
  return (
    <div className='p-3 flex flex-col space-y-6'>
      {/* <ChartWrapper title='Production Trend'>
        <EchartRenderer option={lineChartOptions} />
      </ChartWrapper> */}
      <ChartWrapper title='Pie Chart'>
        <div className="relative">
          <EchartRenderer option={pieChartOptions} />
          <div className="border-box">
            <span className="text-white">Data goes here</span>
          </div>
        </div>
      </ChartWrapper>
    </div>
  );
};

export default App;
