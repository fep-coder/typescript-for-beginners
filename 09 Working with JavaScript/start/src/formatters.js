// @ts-nocheck

export function sizeFormatter(thing, count) {
    writeMessage(`The ${thing} has ${count} items`);
}

/**
 *
 * @param {string} thing
 * @param {number} cost
 */
export function costFormatter(thing, cost) {
    writeMessage(`The ${thing} costs $${cost.toFixed(2)}`, true);
}

function writeMessage(message) {
    console.log(message);
}
