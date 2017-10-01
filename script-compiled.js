'use strict';

var _console;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var greeting = 'Hello';
var name = ' World!';

(_console = console).log.apply(_console, _toConsumableArray(greeting).concat(_toConsumableArray(name)));
