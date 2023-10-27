import './index.html';
import './index.scss';

//for IE
//import "core-js";
import 'core-js/actual/map'

console.log("Hi !!!");
const WinHeaders = new Map([
    ['A', '1'],
    ['B', '2'],
    ['C', '3'],
    ['D', '4'],
]);

WinHeaders.forEach((key, value) => {
    console.log(`${key} - ${value}`);
});