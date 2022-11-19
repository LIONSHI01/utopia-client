import React, { useState } from 'react';
import Router from 'next/router';

import { HiOutlineSearch } from 'react-icons/hi';
import { SearchbarWrapper } from './index.styles';

const Searchbar = ({ setShowOverlay }) => {
  const [query, setQuery] = useState('');

  const onChangeHandler = (e) => setQuery(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setQuery('');
    setShowOverlay(false);
    Router.push(`/search/${query}`);
  };

  return (
    <SearchbarWrapper>
      <form onSubmit={onSubmitHandler}>
        <input
          onFocus={() => setShowOverlay(true)}
          placeholder="Search..."
          value={query}
          onChange={onChangeHandler}
          autocomplete="off"
        />
        <button className="search-btn">
          <HiOutlineSearch type="submit" size={20} color="var(--white)" />
        </button>
      </form>
    </SearchbarWrapper>
  );
};

export default Searchbar;
