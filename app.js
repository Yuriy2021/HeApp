const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);

let arr = [], set = new Set(), n = 1000000;
for (let i = 0; i < n; i++) {
  arr.push(i);
  set.add(i);
};

let result;

console.time('Array');
result = arr.indexOf(123123) !== -1;
console.timeEnd('Array');

console.time('Set');
result = set.has(123123);
console.timeEnd('Set');

console.time('Array'); 
arr.push(n);
console.timeEnd('Array');
console.time('Set'); 
set.add(n);
console.timeEnd('Set');

const deleteFromArr = (arr, item) => {
    let index = arr.indexOf(item);
    return index !== -1 && arr.splice(index, 1);
  };
  console.time('Array'); 
deleteFromArr(arr, n);
console.timeEnd('Array');
console.time('Set'); 
set.delete(n);
console.timeEnd('Set');