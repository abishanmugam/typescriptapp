//// [exportDefaultInterfaceAndTwoFunctions.ts]
export default interface A { a: string; }
export default function() { return 1; }
export default function() { return 2; }


//// [exportDefaultInterfaceAndTwoFunctions.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() { return 1; }
exports.default = default_1;
function default_2() { return 2; }
exports.default = default_2;
