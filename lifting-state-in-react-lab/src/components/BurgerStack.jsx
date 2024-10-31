import { useState } from 'react'

import '../App.css'
import { availableIngredients } from '../App.jsx'

// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    return (
        <ul>
            {props.stack.map((ingredient, index) => (
                /* Had to ask ChatGPT how to work inline Styling in react, it only gave me the style= code */
                <li style={{background: ingredient.color}} key={index}>
                    <strong>{ingredient.name}</strong>
                    <button onClick={props.removeFromBurger}>-</button>
                </li>
                ))}
        </ul>
        )
  }
  
  export default BurgerStack
  