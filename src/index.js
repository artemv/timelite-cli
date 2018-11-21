const tl = require('timelite/time');
const add = tl.add;
const str = tl.str;

function main(opts = {}) {
  if (opts.sum) {
    return sum(opts.sum);
  }
}

function sum(csv) {
  let parts = csv.split(',').map((p) => p.trim());
  let result = str(add(parts));
  if (result.endsWith(':00')) {
    result = result.substr(0, result.length - 3);
  }
  return result;
}

module.exports = main;
