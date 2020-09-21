//Import React and React DOM
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App = function(){
    return (
        <div>
            <label htmlFor="name" className="label">Enter Name: </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
        </div>
    );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />,document.querySelector("#root")); 