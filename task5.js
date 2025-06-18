function myBind(fn, context, ...boundArgs) {
  return function(...args) {
    return fn.apply(context, [...boundArgs, ...args]);
  };
}

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Bob" };
const greetBob = myBind(greet, person, "Hello");

greetBob("!");
