import React, { useEffect, useState } from 'react';

import { FiSearch } from "react-icons/fi";

const Search = () => {

    const [inputSearch, setInputSearch] = useState("")



    useEffect

    return (
        <form className='search-container'>
            <input type="text" id="search" placeholder="Rechercher une recette" onChange={(e) => setInputSearch(e.target.value)} />
            <label htmlFor="search"><FiSearch /></label>
        </form>
    );
};

export default Search;