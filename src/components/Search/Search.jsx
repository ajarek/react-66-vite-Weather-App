import React, {useRef, useEffect} from 'react'
import './Search.css'
const Search = ({ searchValue, setSearchValue, placeholder}) => {
  // const focusRef = useRef()

  // useEffect(() => {
  //   focusRef.current.focus()
  // })
  return (
    <div className='search'>
       <input
            className="search-input"
            type="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={placeholder}
            autoFocus
        />
    </div>
  )
}

export default Search
