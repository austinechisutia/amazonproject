import {formatMoney} from '../../script/money.js';

if(formatMoney(2095) === '$20.95') {
    console.log('test passed');
} else {
    console.log('test failed');
}
console.log("Works with zero");

console.log("Converts cents into dollars");
if(formatMoney(0) === '$0.00') {
    console.log('test passed');
} else {    
    console.log('test failed');
}

console.log("rounds to the nearest zero")
if(formatMoney(2000.5) === '$20.01') {
    console.log('test passed');
} else {
    console.log('test failed');
}