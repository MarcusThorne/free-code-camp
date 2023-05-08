const names = require('./3-names.js')
const sayHi = require('./4-utils.js')
const data = require('./5-alternative-flavor.js')

require('./6-mind-grenade.js')

sayHi(names.john)
sayHi(names.peter)
console.log(data)
sayHi(data.singlePerson.name)
