import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import SummaryStats from './components/SummaryStats.jsx';
import SearchBar from './components/SearchBar.jsx';
import Filters from './components/Filters.jsx';
import BreweryList from './components/BreweryList.jsx';

function App() {
  const [breweries, setBreweries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    city: '',
    state: '',
    type: '',
    nameLength: 50,
  });
  const [isLoading, setIsLoading] = useState(true);

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
      {isLoading ? (
        <p>Loading breweries...</p>
      ) : (
        <>
          <SummaryStats breweries={breweries} />
          <SearchBar setSearchQuery={setSearchQuery} />
          <Filters setFilters={setFilters} />
          <BreweryList
            breweries={breweries}
            searchQuery={searchQuery}
            filters={filters}
          />
        </>
      )}
    </div>
  );
}

export default App;
