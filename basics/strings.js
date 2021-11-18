let someString = "Hello, world!";
console.log(someString.length);
console.log(someString.substring(1, 4));
console.log(someString.slice(-3));
console.log(someString.substr(1, 4));

console.log(someString.split(','));
console.log(someString.indexOf('l'));
console.log(someString.indexOf('l', 3));
console.log(someString.indexOf('zz')); // -1
console.log(someString.lastIndexOf('l'));

console.log(someString.startsWith('Hello'));
console.log(someString.endsWith('!'));
console.log(someString.includes(' '));


console.log(someString.replace('ll', 'kk'));
console.log(someString.toLowerCase());
console.log(someString.toUpperCase());
console.log(someString.normalize());

console.log(someString.charAt(0));
console.log(someString.charAt(someString.length - 1));
console.log(someString.charCodeAt(0));
console.log(someString.codePointAt(0).toString(16));

console.log("x".padStart(3));
console.log("x".padEnd(3));
console.log("x".padStart(3, '*'));
console.log("x".padStart(3, '-'));


console.log(" xxx xx    ".trim());
console.log(" xxx xx    ".trimStart());
console.log(" xxx xx    ".trimEnd());


console.log("x".repeat(3));


const someValue1 = 123;
const someValue2 = "asfasfa";

function processTemplateString(strings, ...params) {
  console.log(strings);
  console.log(params);
  return 'Kekw'
}


console.log(processTemplateString`Bla bla bla ${someValue1} oh my god template ${someValue2} tagged literal ommm`);