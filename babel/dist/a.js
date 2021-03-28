"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aa = exports.a = void 0;
let a = 'a';
exports.a = a;
const aa = 'aa';
exports.aa = aa;
setTimeout(() => {
  exports.a = a = 'change a';
});