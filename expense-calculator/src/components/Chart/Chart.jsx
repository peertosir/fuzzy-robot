import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar/ChartBar';

function Chart({ dataPoints }) {
  const totalMax = Math.max(...dataPoints.map((expense) => expense.value));

  return (
    <div className='chart'>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
