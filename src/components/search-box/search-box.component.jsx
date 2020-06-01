import React from 'react';

import './search-box.component.css';

// function componets: fet some props and set some html
export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className = 'search'
        type = "search" 
        placeholder = {placeholder} 
        onChange = {handleChange}
    />
)

