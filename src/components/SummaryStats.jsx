// src/components/SummaryStats.jsx
import React from 'react';

function SummaryStats({ breweries }) {
  const totalBreweries = breweries.length;
  const microBreweries = breweries.filter(b => b.brewery_type === 'micro').length;
  const cities = breweries.map(b => b.city);
  const uniqueCities = new Set(cities).size;

  return (
    <div className="summary-stats">
      <h2>Summary Statistics</h2>
      <p>Total Breweries: {totalBreweries}</p>
      <p>Micro Breweries: {microBreweries}</p>
      <p>Unique Cities Represented: {uniqueCities}</p>
    </div>
  );
}

export default SummaryStats;
