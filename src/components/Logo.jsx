import React from 'react'
import coffebean from "../images/coffee-beans.png"

function Logo({additional}) {
  return (
      
    <div className={`flex items-center gap-[5px] ${additional}`}>
    <img src={coffebean} alt="Coffee Beans" />
    <h1 className='logo-text'>
        Caffé
    </h1>
</div>
  )
}

export default Logo