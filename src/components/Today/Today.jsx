import React from 'react'
import ListNextDays from '../../components/ListNextDays/ListNextDays'
import './Today.css'
const Today = ({nr,city,temp,desc,array}) => {
  return (
    <div className='today'>
      <div className="img"> <img src={`/images/${nr}.svg`} alt="icon" /></div>
      <div className="info">
        <h2>Today</h2>
        <h1>{city}</h1>
        <p>Temperature: {temp}°C</p>
        <p>{desc}</p>
      </div>
      <ListNextDays
      array={array}
      />
    </div>
  )
}

export default Today