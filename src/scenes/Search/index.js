import React from 'react'
import SearchStore from '../../services/SearchContext/store'
import SearchComponent from './Search'

const Search = () => (
  <SearchStore>
    <SearchComponent />
  </SearchStore>
)

export default Search
