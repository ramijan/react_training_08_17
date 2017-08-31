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


const initialState = {
  selectedNumbers: [],

};

console.log('Store loaded...');
