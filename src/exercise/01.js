// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React from 'react';
function countReducer(state, newState) {
  return newState;
}
function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [count, setCount] = React.useReducer(countReducer, initialCount);

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  function increment() {
    const newState = count + step;
    setCount(newState);
  }
  return <button onClick={increment}>{count}</button>;
}
function App() {
  return <Counter />;
}

// function nameReducer(previousName, action) {
//   console.log(`state=${previousName}\naction=${action}`);
//   return action;
// }

// const initialNameValue = 'Joe';

// function NameInput() {
//   const [name, setName] = React.useReducer(nameReducer, initialNameValue);
//   const handleChange = event => setName(event.target.value);
//   debugger;
//   return (
//     <>
//       <label>
//         Name: <input defaultValue={name} onChange={handleChange} />
//       </label>
//       <div>You typed: {name}</div>
//     </>
//   );
// }

// function App() {
//   return <NameInput />;
// }

export default App;
