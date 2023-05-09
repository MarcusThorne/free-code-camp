// npm - global command, comes with node
// npm --version

// local dependecnt - use it only ion this particular project
// npm i <packagenname>

// gloval dependency - use it in any project
// npm install -g </packagenname>
// sudo npm install -g <packagename> (mac)


// package.json = manifest file (stores important info about propjecy/package)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
