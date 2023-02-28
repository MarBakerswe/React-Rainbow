import React from 'react' // import useState from React

function ColorBlock(props){ // pass props into our function
    return (
        <div className="colorBlock" 
        style={{
            backgroundColor: props.color,
            height: "100px",
            width: "100px",
            margin: "10px",
            display: "inline-block"
        }}>
            <p>{props.color}</p> {/* set the value of our input to the state variable */}
        </div>
    )
}

export default ColorBlock


