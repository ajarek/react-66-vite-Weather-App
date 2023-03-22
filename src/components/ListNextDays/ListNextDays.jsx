import React from 'react'
import './ListNextDays.css'

const ListNextDays = ({array}) => {
  return (
    <div className='list-next-days'>
     {array.map((el,index)=>{
     

      return(
         <div className="day" key={index}>
           <p>{ new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(el.dt_txt))}</p>
           <img src={`/images/${el.weather[0].icon}.svg`} alt="" />
           <p>{(el.main.temp).toFixed(0)}°C</p>
         </div>
      )

     })}
    </div>
  )
}

export default ListNextDays