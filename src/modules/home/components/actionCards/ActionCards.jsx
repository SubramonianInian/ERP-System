import React from 'react'
import "./actionCards.scss"
function ActionCards({ name, details, image }) {

    return (
        <div className='action-card'>
            <div className='image-container'>
                <img src={image} alt={image} />
            </div>
            <div className='content'>
                <div className='details'>
                    <h2>{name}<br /><span>{details}</span></h2>
                </div>
            </div>
        </div>)

}

export default ActionCards
