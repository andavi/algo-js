const fs = require('fs');

function karatsuba(x, y) {
  // Convert to strings
  x = String(x);
  y = String(y);

  // Base case
  if (x.length === 1 && y.length === 1) {
    return Number(x) * Number(y);
  }

  // Pad zeros in case of uneven lengths
  if (x.length < y.length) {
    x = x.padStart(y.length, '0');
  } else if (y.length < x.length) {
    y = y.padStart(x.length, '0');
  }

  const n = x.length;
  const nBy2 = Math.ceil(n / 2);

  const a = Number(x.slice(0, nBy2));
  const b = Number(x.slice(nBy2));
  const c = Number(y.slice(0, nBy2));
  const d = Number(y.slice(nBy2));

  const ac = karatsuba(a, c);
  const bd = karatsuba(b, d);
  const pq = karatsuba(a + b, c + d);

  return Number(String(ac) + '0'.repeat(n - nBy2 + n - nBy2))
        + Number(String(pq - ac - bd) + '0'.repeat(n - nBy2))
        + bd;
}

console.log(karatsuba(1234, 5678));

 
function doProblem() {
  fs.readFile('input', 'utf8', (err, data) => {  
      if (err) throw err;
      const result = data.split('\n').map(n => Number(n));
      console.log(karatsuba(result[0], result[1]));
  });
}
// doProblem();


module.exports = karatsuba;