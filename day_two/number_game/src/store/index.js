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

const actionFunctions = {
  SELECT_NUMBER: (state, payload) => {
    return {
      ...state,
      selectedNumbers: [...state.selectedNumbers, payload.index]
    };
  }
};

const reducer = (state, action) => {
  const actionFunction = actionFunctions[action.type];
  if (!actionFunction) {
    return state;
  }
  return actionFunction(state, action.payload);
};

const store = Redux.createStore(reducer, initialState);
// console.log(store);
// console.log('Get state', store.getState());
// store.dispatch({ type: 'SELECT_NUMBER', payload: { index: 3 } });
// console.log('Get state', store.getState());
// store.dispatch({ type: 'SELECT_NUMBER', payload: { index: 5 } });
// console.log('Get state', store.getState());
// store.dispatch({ type: 'SELECT_NUMBER', payload: { index: 7 } });
// console.log('Get state', store.getState());
//
// store.dispatch({ type: 'TEST1' });
// console.log('getState', store.getState());
// store.dispatch({ type: 'TEST2' });
// console.log('getState', store.getState());
// store.dispatch({ type: 'TEST2' });
// console.log('getState', store.getState());

export default store;
