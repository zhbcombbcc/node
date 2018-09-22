'use strict';

var fs = require('fs');

var data = 'Hello2, Node.js';
fs.writeFileSync('output.txt', data);