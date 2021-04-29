const names = require('./3-names-module');
const sayHello = require('./4-utils-module');
const data = require('./5-alternative-export');

console.log(names);
sayHello(names.firstName+' ' +names.lastName);
console.log(data);