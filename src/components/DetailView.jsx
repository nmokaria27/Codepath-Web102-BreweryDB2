import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function DetailView({ breweries }) {
  const { id } = useParams();
  const brewery = breweries.find(b => b.id === id);

  if (!brewery) {
    return <div>Brewery not found</div>;
  }

  return (
    <div className="detail-view">
      <h2>{brewery.name}</h2>
      <p>Type: {brewery.brewery_type}</p>
      <p>Address: {brewery.street}, {brewery.city}, {brewery.state_province}, {brewery.postal_code}</p>
      <p>Phone: {brewery.phone || 'N/A'}</p>
      {brewery.website_url && (
        <p>Website: <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a></p>
      )}
      <Link to="/">Back to List</Link>
    </div>
  );
}

