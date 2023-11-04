import './index.html'
import './index.scss'
import {Temperature, TemperatureEnum, TemperatureConverterSingelton } from './ts/temperature-converter'

//for IE
//import "core-js";
import 'core-js/actual/map'
import 'core-js/features/url';
import 'core-js/features/url-search-params';

console.log("Hi !!!");

const converter = TemperatureConverterSingelton.getInstance();
const result = converter.convert(10, TemperatureEnum.Kelvin)

console.log(result);

let a;
if (a === null) {
    a = 1
}
const W: Map<string, string> = new Map([
    ['A', '1'],
    ['B', '2'],
    ['C', '3'],
    ['D', '4'],
])

W.forEach((key: string, value: string) => {
    console.log(`${key} - ${value}`);
})