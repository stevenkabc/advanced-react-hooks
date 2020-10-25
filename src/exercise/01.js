// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React from 'react';
function countReducer(state, action) {
  const {type, step} = action;
  switch (type) {
    case 'INCREMENT': {
      return {count: state.count + step};
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}
const Counter = ({initialCount = 0, step = 1}) => {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount
  });
  const {count} = state;
  const increment = () => dispatch({type: 'INCREMENT', step});
  return <button onClick={increment}>{count}</button>;
};
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
