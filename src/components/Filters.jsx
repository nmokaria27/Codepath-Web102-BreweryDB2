import React, { useState } from 'react';

function Filters({ setFilters }) {
  const [cityInput, setCityInput] = useState('');
  const [stateInput, setStateInput] = useState('');
  const [typeInput, setTypeInput] = useState('');
  const [nameLength, setNameLength] = useState(50);

  const handleCityChange = (e) => {
    setCityInput(e.target.value);
    setFilters(prev => ({ ...prev, city: e.target.value }));
  };

  const handleStateChange = (e) => {
    setStateInput(e.target.value);
    setFilters(prev => ({ ...prev, state: e.target.value }));
  };

  const handleTypeChange = (e) => {
    setTypeInput(e.target.value);
    setFilters(prev => ({ ...prev, type: e.target.value }));
  };

  const handleNameLengthChange = (e) => {
    setNameLength(e.target.value);
    setFilters(prev => ({ ...prev, nameLength: e.target.value }));
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Filter by city"
        value={cityInput}
        onChange={handleCityChange}
      />
      <input
        type="text"
        placeholder="Filter by state"
        value={stateInput}
        onChange={handleStateChange}
      />
      <select value={typeInput} onChange={handleTypeChange}>
        <option value="">All Types</option>
        <option value="micro">Micro</option>
        <option value="nano">Nano</option>
        <option value="regional">Regional</option>
        <option value="brewpub">Brewpub</option>
        <option value="large">Large</option>
        <option value="planning">Planning</option>
        <option value="bar">Bar</option>
        <option value="contract">Contract</option>
        <option value="proprietor">Proprietor</option>
        <option value="closed">Closed</option>
      </select>
      <div className="name-length-filter">
        <label htmlFor="nameLength">Max Brewery Name Length: {nameLength}</label>
        <input
          type="range"
          id="nameLength"
          min="100/8"
          max="500"
          value={nameLength}
          onChange={handleNameLengthChange}
        />
      </div>
    </div>
  );
}

export default Filters;
