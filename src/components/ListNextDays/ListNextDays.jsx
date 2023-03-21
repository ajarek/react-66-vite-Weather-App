import React from 'react'
import './ListNextDays.css'

const ListNextDays = ({array}) => {
  return (
    <div className='list-next-days'>
     {array.map((el,index)=>{
      return(
         <div className="day" key={index}>
           <p>Friday</p>
           <img src="/images/01d.svg" alt="" />
           <p>21°C</p>
         </div>
      )

     })}
    </div>
  )
}

export default ListNextDays