const fs = require('fs');

function karatsuba(x, y) {
  if ()
}

 
function doProblem() {
  fs.readFile('input', 'utf8', (err, data) => {  
      if (err) throw err;
      const result = data.split('\n').map(n => Number(n));
      console.log(result);
  });
}
// doProblem();


module.exports = karatsuba;