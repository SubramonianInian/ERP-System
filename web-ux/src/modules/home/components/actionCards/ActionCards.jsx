import React from 'react'
import './actionCards.scss'
function ActionCards({ id, name, details, image, onModuleSelect }) {
  return (
    <div
      className='action-card'
      onClick={() => {
        onModuleSelect(id)
      }}
    >
      <div className='image-container'>
        <img src={image} alt={image} />
      </div>
      <div className='content'>
        <div className='details'>
          <h2>
            {name}
            <br />
            <span>{details}</span>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default ActionCards
