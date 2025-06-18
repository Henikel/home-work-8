function mul(a) {
  return function(b) {
    return a * b;
  };
}

const doubleMul = mul(2);
const quadraMul = mul(4);

console.log(doubleMul(5));
console.log(quadraMul(3));
