import React, { useState } from 'react';

function BreweryCard({ brewery }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(prevState => !prevState);
  };

  return (
    <div className="brewery-card" onClick={handleCardClick}>
      <h3>{brewery.name}</h3>
      <p>Type: {brewery.brewery_type}</p>
      <p>City: {brewery.city}</p>
      <p>State: {brewery.state_province}</p>
      {brewery.website_url && (
        <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      )}
      {showDetails && (
        <div className="brewery-details">
          <p>
            Address: {brewery.street}, {brewery.city}, {brewery.state_province},{' '}
            {brewery.postal_code}
          </p>
          <p>Phone: {brewery.phone || 'N/A'}</p>
        </div>
      )}
    </div>
  );
}

export default BreweryCard;
