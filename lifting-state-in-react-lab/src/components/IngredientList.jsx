import { useState } from 'react'

import '../App.css'
import { availableIngredients } from '../App.jsx'

// src/components/IngredientList.jsx
const IngredientList = (props) => {
    return (
    <ul>
        {availableIngredients.map((ingredient, index) => (
            /* Had to ask ChatGPT how to work inline Styling in react, it only gave me the style= code */
            <li style={{background: ingredient.color}} key={index}>
                <strong>{ingredient.name}</strong>
                <button onClick={props.addToBurger}>+</button>
            </li>
            ))}
    </ul>
    )
  }
  
  export default IngredientList
  