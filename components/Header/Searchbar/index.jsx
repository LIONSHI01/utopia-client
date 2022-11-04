import React, { useState } from 'react';
import Router from 'next/router';
import { HiOutlineSearch } from 'react-icons/hi';

import { SearchbarWrapper } from './index.styles';

const Searchbar = () => {
  const [query, setQuery] = useState('');

  const onChangeHandler = (e) => setQuery(e.target.value);

  const onSubmitHandler = () => {
    Router.push(`/search/${query}`);
  };

  return (
    <SearchbarWrapper>
      <input placeholder="Search" value={query} onChange={onChangeHandler} />
      <button className="search-btn">
        <HiOutlineSearch
          size={20}
          color="var(--white)"
          onClick={onSubmitHandler}
        />
      </button>
    </SearchbarWrapper>
  );
};

export default Searchbar;
