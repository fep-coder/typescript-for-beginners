"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeMessage = exports.costFormatter = exports.sizeFormatter = void 0;
function sizeFormatter(thing, count) {
    writeMessage(`The ${thing} has ${count} items`);
}
exports.sizeFormatter = sizeFormatter;
/**
 *
 * @param {string} thing
 * @param {number} cost
 */
function costFormatter(thing, cost) {
    writeMessage(`The ${thing} costs $${cost.toFixed(2)}`, true);
}
exports.costFormatter = costFormatter;
function writeMessage(message) {
    console.log(message);
}
exports.writeMessage = writeMessage;
