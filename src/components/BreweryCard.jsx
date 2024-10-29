import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BreweryCard({ brewery }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`brewery-card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
      <h3>{brewery.name}</h3>
      <p><strong>Type:</strong> {brewery.brewery_type}</p>
      <p><strong>City:</strong> {brewery.city}</p>
      <p><strong>State:</strong> {brewery.state_province}</p>
      {isExpanded && (
        <div className="expanded-content">
          <p><strong>Address:</strong> {brewery.street}, {brewery.postal_code}</p>
          <p><strong>Phone:</strong> {brewery.phone || 'N/A'}</p>
          {brewery.website_url && (
            <p><strong>Website:</strong> <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a></p>
          )}
        </div>
      )}
      <Link to={`/brewery/${brewery.id}`} className="view-details-link" onClick={(e) => e.stopPropagation()}>
        View Full Details
      </Link>
    </div>
  );
}