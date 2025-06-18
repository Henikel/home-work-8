const user = {
  name: "Alice"
};

function format(start, end) {
  console.log(`${start}${this.name}${end}`);
}

const f1 = function(start, end) {
  return format.call(user, start, end);
};
f1("<<<", ">>>");

const f2 = format.bind(user);
f2("<<<", ">>>");
