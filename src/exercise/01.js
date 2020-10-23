// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React from 'react';
function countReducer(state, newCountState) {
  console.log({...state, newCountState});
  console.log({...state, ...newCountState});
  return {...state, ...newCountState};
}
const {useReducer} = React;
function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [state, setState] = useReducer(countReducer, {count: initialCount});

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const {count} = state;
  const increment = () => setState({count: count + step});

  return <button onClick={increment}>{count}</button>;
}
function App() {
  return <Counter />;
}

// function nameDispatch(currentNameState, inputTypedInValue) {
//   const newNameState = inputTypedInValue;
//   console.log(
//     `Current Name State = ${currentNameState} New Name State = ${newNameState}`
//   );
//   return newNameState;
// }

// const initialNameValue = 'Joe';

// function NameInput() {
//   const [nameState, setName] = React.useReducer(nameDispatch, initialNameValue);

//   const handleChange = event => {
//     const setNameWithThis = event.target.value;
//     setName(setNameWithThis);
//   };
//   return (
//     <>
//       <label>
//         Name: <input defaultValue={nameState} onChange={handleChange} />
//       </label>
//       <div>You typed: {nameState}</div>
//     </>
//   );
// }

// function App() {
//   return <NameInput />;
// }

export default App;
