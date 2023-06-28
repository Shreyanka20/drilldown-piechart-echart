import React from 'react';

interface ChartWrapperProps {
  title: string;
  children: React.ReactNode;
}

const ChartWrapper: React.FC<ChartWrapperProps> = ({ title, children }) => {
  return (
    <div className="chart-wrapper">
      <h2>{title}</h2>
      <div className="chart-container">{children}</div>
    </div>
  );
};

export default ChartWrapper;