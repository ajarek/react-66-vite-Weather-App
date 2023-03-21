import { useEffect, useState } from "react"
import Search from './components/Search/Search'
import useDebounce from './hooks/useDebounce'

const url=  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=96d145cbc67ffa8619b24c37dd8a0cab`

function App() {
  const [searchValue, setSearchValue] = useState('')

  const debouncedSearchValue = useDebounce(searchValue, 1000)
//  useEffect(()=>{
// console.log(debouncedSearchValue);
//  },[debouncedSearchValue])
  return (
    <div className='App'>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        placeholder={'Enter a City...'}
      />
      <div className="city">{debouncedSearchValue}</div>
      
    </div>
  )
}

export default App
