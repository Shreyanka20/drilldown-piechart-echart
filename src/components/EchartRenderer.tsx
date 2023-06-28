import React from "react";
import ReactECharts from 'echarts-for-react';
const EchartRenderer: React.FC<{ option: any }>= ({option }) => {
return (
<div className='w-full h-80 p-3 rounded-md bg-white shadow-xl border'> 
<ReactECharts option={option} />
</div>
);
};

export default EchartRenderer;