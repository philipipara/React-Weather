import React, { useState } from 'react';

const SearchBar = (props) => {
    const [query, setQuery] = useState('');
    const [unit, setUnit] = useState({queryUnit: 'imperial', degreeUnit: 'F'});

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(query, unit.queryUnit, unit.degreeUnit);
        setQuery('');
    };

    
    return (
        <form onSubmit={e => handleFormSubmit(e)}>
            <div className="unit">
                <h3
                    className={unit.queryUnit === 'imperial' ? 'unit-active' : ''}
                    onClick={() => setUnit({queryUnit: 'imperial', degreeUnit: 'F'})}>F°</h3>
                <h3
                    className={unit.queryUnit === 'metric' ? 'unit-active' : ''}
                    onClick={() => setUnit({queryUnit: 'metric', degreeUnit: 'C'})}>C°</h3>
            </div>
            <input
                type="text"
                className="searchbar"
                placeholder="Enter a location"
                value={query}
                onChange={e => setQuery(e.target.value)}></input>
        </form>
    );
};

export default SearchBar;