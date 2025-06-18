const user = {
  name: "John"
};

function sayHi() {
  console.log(`Hi, ${this.name}`);
}

function sayBye() {
  console.log(`Bye, ${this.name}`);
}

sayHi.call(user);
sayBye.call(user);
