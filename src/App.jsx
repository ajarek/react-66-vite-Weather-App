import { useEffect, useState } from 'react'
import Search from './components/Search/Search'
import FullPageLayout from './components/FullPageLayout/FullPageLayout'
import Today from './components/Today/Today'
import Loading from './components/Loading/Loading'
import ListNextDays from './components/ListNextDays/ListNextDays'
import Error from './components/Error/Error'
import useDebounce from './hooks/useDebounce'
import useFetch from './hooks/useFetch'

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [newCity, setNewCity] = useState('')
  const [newTemp, setNewTemp] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [newIcon, setNewIcon] = useState('')
  const [array, setArray] = useState([])

  const debouncedSearchValue = useDebounce(searchValue, 1000) || 'Kołobrzeg'
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${debouncedSearchValue}&APPID=96d145cbc67ffa8619b24c37dd8a0cab&units=metric`

  const { data, pending, error } = useFetch(url)
  useEffect(() => {
    if (data) {
      const filterArray = data.list.filter(
        (item, index) => index % 8 === 0 && index > 0
      )
      const { city } = data
      setNewCity(city.name)
      setNewTemp(data.list[0].main.temp)
      setNewDesc(data.list[0].weather[0].description)
      setNewIcon(data.list[0].weather[0].icon)
      setArray(filterArray)
    }
  }, [data])

  return (
    <div className='App'>
      {error ? (
        <FullPageLayout>
          <Error message={error} />
        </FullPageLayout>
      ) : null}
      {pending ? (
        <FullPageLayout>
          <Loading />
        </FullPageLayout>
      ) : null}

      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        placeholder={'Enter a City...'}
      />
      <Today
        city={newCity}
        temp={newTemp}
        desc={newDesc}
        nr={newIcon}
        array={array}
      />
    </div>
  )
}

export default App
