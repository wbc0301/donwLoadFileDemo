var fs = require('fs')

fs.readFile('t.html', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data.toString());
});



