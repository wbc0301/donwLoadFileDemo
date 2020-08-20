const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
  let url = req.url;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    fs.readFile('index.html', function (err, data) {
      if (err) {
        return console.log(err);
      }
      res.end(data);
    });
  } else if (url === '/axios') {
    res.setHeader('Content-Type', 'application/javascript;charset=utf-8')
    fs.readFile('axios.js', function (err, data) {
      if (err) {
        return console.log(err);
      }
      res.end(data);
    });
  } else if (url === '/getXLS') {
    res.setHeader('Content-Type', 'application/vnd.ms-excel;charset=utf-8')
    fs.createReadStream('t.xls').pipe(res);
  } else if (url === '/getHTML') {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    fs.createReadStream('t.html').pipe(res);
  } else if (url === '/apiDemo') {
    let data = { code: 123, message: 'success!!!', data: { name: 'zs', age: 18 } }
    res.end(JSON.stringify(data));
  }

})

server.listen(3000)
