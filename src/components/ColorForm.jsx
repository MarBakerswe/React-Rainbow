import React, { useState } from 'react' // import useState from React

function ColorForm(props){ // pass props into our function
    let [input, setInput] = useState('') // Initialize our state variable

    const handleSubmit = (e) => {
        // We still want to eliminate the default behavior of our form submittal
        e.preventDefault()
        // addColor, the function we just built, should be available within props.
        props.addColor(input)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> {/* set the onSubmit of our form to our handleSubmit function */}
                <input type="text" 
                onChange={(e) => setInput(e.target.value)} /> {/* Set the value of our input to the state variable */}
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm