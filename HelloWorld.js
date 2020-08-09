const http = require('http');
const minimist = require('minimist');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 500
  // res.setHeader('Content-Type', 'text/plain')
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  res.end('你好世界')
})

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})
// process.env.NODE_ENV = 'aaa';
// const args = minimist(process.argv.slice(2));
// console.log(process.argv);
// console.log(process.argv[0]);
// console.log(process.argv0);
// console.log(args);
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

// process.exit();

console.log(module.exports === exports)
console.log(module)