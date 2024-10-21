import React from 'react';
import BreweryCard from './BreweryCard.jsx';

function BreweryList({ breweries, searchQuery, filters }) {
  const filteredBreweries = breweries
    .filter(b =>
      b.name && b.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(b =>
      filters.city
        ? b.city && b.city.toLowerCase().includes(filters.city.toLowerCase())
        : true
    )
    .filter(b =>
      filters.state
        ? b.state_province &&
          b.state_province.toLowerCase().includes(filters.state.toLowerCase())
        : true
    )
    .filter(b =>
      filters.type
        ? b.brewery_type &&
          b.brewery_type.toLowerCase() === filters.type.toLowerCase()
        : true
    )
    .filter(b =>
      filters.nameLength
        ? b.name && b.name.length <= filters.nameLength
        : true
    );

  return (
    <div className="brewery-list">
      {filteredBreweries.length > 0 ? (
        filteredBreweries.map(brewery => (
          <BreweryCard key={brewery.id} brewery={brewery} />
        ))
      ) : (
        <p>No breweries found.</p>
      )}
    </div>
  );
}

export default BreweryList;
