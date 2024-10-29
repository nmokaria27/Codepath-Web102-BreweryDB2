import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import SummaryStats from './components/SummaryStats.jsx';
import SearchBar from './components/SearchBar.jsx';
import Filters from './components/Filters.jsx';
import BreweryList from './components/BreweryList.jsx';
import DetailView from './components/DetailView.jsx';
import DataVisualization from './components/DataVisualization.jsx';

export default function App() {
  const [breweries, setBreweries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    city: '',
    state: '',
    type: '',
    nameLength: 50,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [showVisualization, setShowVisualization] = useState(false);

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        const response = await fetch('https://api.openbrewerydb.org/v1/breweries?per_page=100');
        const data = await response.json();
        setBreweries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBreweries();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={
          isLoading ? (
            <p>Loading breweries...</p>
          ) : (
            <>
              <SummaryStats breweries={breweries} />
              <SearchBar setSearchQuery={setSearchQuery} />
              <Filters setFilters={setFilters} />
              <button onClick={() => setShowVisualization(!showVisualization)}>
                {showVisualization ? 'Hide' : 'Show'} Visualization
              </button>
              {showVisualization && <DataVisualization breweries={breweries} />}
              <BreweryList
                breweries={breweries}
                searchQuery={searchQuery}
                filters={filters}
              />
            </>
          )
        } />
        <Route path="/brewery/:id" element={<DetailView breweries={breweries} />} />
      </Routes>
    </div>
  );
}