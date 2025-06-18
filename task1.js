function mul(...args) {
  const numbers = args.filter(arg => typeof arg === 'number');
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, val) => acc * val, 1);
}

console.log(mul(1, 'text', 2, 3));
console.log(mul(true, '5', null));
