import { useState } from 'react'
import './App.css'
import BurgerStack from './components/BurgerStack'
import IngredientList from './components/IngredientList'

// src/App.jsx

import './App.css'

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
]

const App = () => {

  const [stack, setStack] = useState([])
  /* const [ingredients, setIngredients] = useState(availableIngredients) */

  return (
    <main>
      <h1>Retro Burger Stacker</h1>
      <section>
        <IngredientList addToBurger={addToBurger}/>
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger}/>
      </section>
    </main>
  )

  /* Main Functions */
  function addToBurger(event) {
    console.log(event.target.key)
  }
  
  function removeFromBurger(event) {
    console.log(event.target)
  }
  /* Helper Functions */
  
}

export default App

