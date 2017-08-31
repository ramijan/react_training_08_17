/*
  initial data:
    target number
    x random numbers
    These can be generated before mount, or passed as props

  state:
    selected numbers
    Note: Don't put things on the state that can be computed from other
    state values (ex: sum of selected number,   win/lose state)  This will
    minimize re-rendering because React will re-render every time state changes
*/

import * as Redux from 'redux';

const initialState = {
  selectedNumbers: []
};

const reducer = (state, action) => {
  // console.log('Calling reducer', action);
  // if (action.type === 'TEST1') {
  //   return {
  //     ...state,
  //     counter: 1
  //   };
  // }
  //
  // if (action.type === 'TEST2') {
  //   return {
  //     ...state,
  //     counter: state.counter + 1
  //   };
  // }

  return state;
};

const store = Redux.createStore(reducer, initialState);
// console.log(store);
// console.log('Get state', store.getState());
//
// store.dispatch({ type: 'TEST1' });
// console.log('getState', store.getState());
// store.dispatch({ type: 'TEST2' });
// console.log('getState', store.getState());
// store.dispatch({ type: 'TEST2' });
// console.log('getState', store.getState());

export default store;
