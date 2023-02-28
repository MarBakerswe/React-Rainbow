import React, { useState } from 'react' // react hooks
import ColorBlock from './components/ColorBlock' // import ColorBlock component
import ColorForm from './components/ColorForm' // import ColorForm component

function App() { // functional component
  const [colors, setColors] = useState([ // colors state
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red' // initial colors array
  ])

  const addColor = (color) => { // addColor function
    setColors([...colors, color]) // add color to colors array
  }

  return (
    <div className="App">
      <ColorForm addColor={addColor} />
      <div className="color-blocks">
        {colors.map((color, index) => ( // map over colors array
          <ColorBlock key={index} color={color} /> // pass color to ColorBlock component
        ))}
      </div>
    </div>
  );
}

export default App;