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
    let targetIndex = event.target.name /* Looked up button attributes, this is the index of clicked ingredient */
    console.log(`Adding: #${targetIndex}`)
    let updatedStack = [... stack, availableIngredients[targetIndex]]
    setStack(updatedStack)
  }
  
  function removeFromBurger(event) {
    let targetIndex = event.target.name /* Looked up button attributes, this is the index of clicked ingredient */
    console.log(`Removing: #${targetIndex}`)
    let targetIngredient = stack[targetIndex].name
    console.log(`Removing: #${targetIngredient}`)
    /* let updatedStack = stack.splice(targetIngredient, 1) */ /* This was catastrophic, it removed everything EXCEPT for the thing I clicked on! */
    /* Quick googling helped me find a solution, this returns new array */
    /* https://www.tutorialspoint.com/how-to-splice-an-array-without-mutating-the-original-array */
    /* let updatedStack = [...stack].splice(targetIngredient, 1)  */
    /* ... but it did not work until I seperated it */
    let updatedStack = [...stack]
    updatedStack.splice(targetIndex, 1)
    setStack(updatedStack)
  }
  /* Helper Functions */
  
}

export default App

