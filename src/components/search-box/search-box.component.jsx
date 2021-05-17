import React from 'react';

import './search-box.styles.css';

// Arrow function with () instead of {} will auto return, if using {} do not forget to use a return()
export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className="search"
        type="search" 
        placeholder={placeholder} 
        onChange= {handleChange}
    />
    )

