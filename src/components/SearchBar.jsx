import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function SearchBar(props) {
  const { searchFilter } = props;
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchFilter(e.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label htmlFor="search">Search</label>
      <Input type="text" name="search" value={search} onChange={handleSearch} />
    </>
  );
}

export default SearchBar;
