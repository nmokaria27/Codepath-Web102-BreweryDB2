import React, { useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

export default function DataVisualization({ breweries }) {
  const [chartType, setChartType] = useState('bar');

  const breweryTypes = breweries.reduce((acc, brewery) => {
    acc[brewery.brewery_type] = (acc[brewery.brewery_type] || 0) + 1;
    return acc;
  }, {});

  const stateData = breweries.reduce((acc, brewery) => {
    acc[brewery.state_province] = (acc[brewery.state_province] || 0) + 1;
    return acc;
  }, {});

  const top10States = Object.entries(stateData)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const barData = {
    labels: Object.keys(breweryTypes),
    datasets: [
      {
        label: 'Number of Breweries by Type',
        data: Object.values(breweryTypes),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const pieData = {
    labels: top10States.map(([state]) => state),
    datasets: [
      {
        data: top10States.map(([, count]) => count),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
          '#FF9F40', '#FF6384', '#C9CBCF', '#4BC0C0', '#36A2EB'
        ],
      },
    ],
  };

  const lineData = {
    labels: Object.keys(breweryTypes),
    datasets: [
      {
        label: 'Number of Breweries by Type',
        data: Object.values(breweryTypes),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: chartType === 'bar' ? 'Brewery Types Distribution' :
              chartType === 'pie' ? 'Top 10 States with Most Breweries' :
              'Brewery Types Distribution (Line)',
      },
    },
  };

  return (
    <div className="data-visualization">
      <div className="chart-controls">
        <button onClick={() => setChartType('bar')} className={chartType === 'bar' ? 'active' : ''}>Bar Chart</button>
        <button onClick={() => setChartType('pie')} className={chartType === 'pie' ? 'active' : ''}>Pie Chart</button>
        <button onClick={() => setChartType('line')} className={chartType === 'line' ? 'active' : ''}>Line Chart</button>
      </div>
      <div className="chart-container">
        {chartType === 'bar' && <Bar data={barData} options={options} />}
        {chartType === 'pie' && <Pie data={pieData} options={options} />}
        {chartType === 'line' && <Line data={lineData} options={options} />}
      </div>
      <div className="chart-explanation">
        <h3>Interesting Insights</h3>
        <p>The bar and line charts show the distribution of brewery types across our dataset. This gives us insight into the most common types of breweries.</p>
        <p>The pie chart displays the top 10 states with the most breweries, helping us understand which regions have the highest concentration of brewing activity.</p>
        <p>These visualizations can help beer enthusiasts, entrepreneurs, and researchers understand trends in the brewing industry and potentially identify opportunities or areas of interest.</p>
      </div>
    </div>
  );
}