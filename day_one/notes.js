// Three ways to define functions
let o = {
  f1: function() {
    console.log('f1');
  },
  f2: () => {
    console.log('f2');
  },
  f3() {
    console.log('f3');
  }
}
// Dynamic properties
let a = 'hello';
let o = {
  [a]: 42
};
console.log(o.hello); // 42


// this
// In general `this` refers to the caller of the function
let o = {
  f1: function() {
    console.log(this);
  }
}
o.f1()  // this refers to o

let o = {
  f2: () => {
    console.log(this);
  }
}
o.f2() // `this` refers to window

let o = {
  f3: () => {
    console.log(this);
  }
}
o.f3() // `this` refers to o

// call, apply, bind
o.f1.call(this)  // calls f1, but uses this scope's this value
o.f1.apply(this)  // same but lets you do arguments
o.f1.bind(this) // returns a new function reference with `this` bound to current scope

