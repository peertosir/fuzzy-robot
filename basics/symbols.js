const symbol = Symbol("some symbol");

const someObj = {
  [symbol]: 'some value'
}

console.log(someObj["some symbol"]);
console.log(someObj[symbol]);