'use strict'

const msg = "hello world"
const test = require('./lib/test');

module.exports={
    msg,
    add: test.add
}