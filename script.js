// Singleton
let clz;

function Universe() {
  let size = 100;
  if (typeof clz !== 'object') {
    clz = this;
    clz.getSize = function () {
      return size;
    };
    clz.setSize = function (s) {
      size = s;
    };
  }
  return clz;
}

// Testing

let a = new Universe();
let b = new Universe();

console.log(a === b); // должны получить true


console.log(a.getSize(), b.getSize()); // 100, 100
a.setSize(200);
console.log(a.getSize(), b.getSize()); // 200, 200
