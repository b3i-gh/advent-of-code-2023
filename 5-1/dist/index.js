"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { input } from './input/test-input';
const input_1 = require("./input/input");
var splittedInput = input_1.input.split("\n");
/*  struttura array:
[0] seed iniziale
[1] soil
[2] fertilizer
[3] water
[4] light
[5] temperature
[6] humidity
[7] location
*/
var mappedInput = [];
// get the seeds:
mappedInput.push(readLineNumbers(splittedInput[0]));
console.log("seeds:" + mappedInput);
var output = -1;
// get the seed-to-soil-map
var seedToSoilMap = [];
for (var i = splittedInput.indexOf("seed-to-soil map:") + 1; i < splittedInput.indexOf("soil-to-fertilizer map:") - 1; i++)
    seedToSoilMap.push(readLineNumbers(splittedInput[i]));
console.log("seed-to-soil map:" + seedToSoilMap);
// get the soil-to-fertilizer map
var soilToFertilizerMap = [];
for (var i = splittedInput.indexOf("soil-to-fertilizer map:") + 1; i < splittedInput.indexOf("fertilizer-to-water map:") - 1; i++)
    soilToFertilizerMap.push(readLineNumbers(splittedInput[i]));
console.log("soil-to-fertilizer map:" + soilToFertilizerMap);
// get the fertilizer-to-water map
var fertilizerToWarerMap = [];
for (var i = splittedInput.indexOf("fertilizer-to-water map:") + 1; i < splittedInput.indexOf("water-to-light map:") - 1; i++)
    fertilizerToWarerMap.push(readLineNumbers(splittedInput[i]));
console.log("fertilizer-to-water map:" + fertilizerToWarerMap);
// get the water-to-light map
var waterToLightMap = [];
for (var i = splittedInput.indexOf("water-to-light map:") + 1; i < splittedInput.indexOf("light-to-temperature map:") - 1; i++)
    waterToLightMap.push(readLineNumbers(splittedInput[i]));
console.log("water-to-light map:" + waterToLightMap);
// get the light-to-temperature map
var lightToTemperatureMap = [];
for (var i = splittedInput.indexOf("light-to-temperature map:") + 1; i < splittedInput.indexOf("temperature-to-humidity map:") - 1; i++)
    lightToTemperatureMap.push(readLineNumbers(splittedInput[i]));
console.log("light-to-temperature map:" + lightToTemperatureMap);
// get the temperature-to-humidity map:
var temperatureToHumidityMap = [];
for (var i = splittedInput.indexOf("temperature-to-humidity map:") + 1; i < splittedInput.indexOf("humidity-to-location map:") - 1; i++)
    temperatureToHumidityMap.push(readLineNumbers(splittedInput[i]));
console.log("temperature-to-humidity map:" + temperatureToHumidityMap);
// get the humidity-to-location map:
var humidityToLocationMap = [];
for (var i = splittedInput.indexOf("humidity-to-location map:") + 1; i < splittedInput.length; i++)
    humidityToLocationMap.push(readLineNumbers(splittedInput[i]));
console.log("humidity-to-location map:" + humidityToLocationMap);
let transformedFinal = mappedInput[0];
transformedFinal = transform(transformedFinal, seedToSoilMap);
transformedFinal = transform(transformedFinal, soilToFertilizerMap);
transformedFinal = transform(transformedFinal, fertilizerToWarerMap);
transformedFinal = transform(transformedFinal, waterToLightMap);
transformedFinal = transform(transformedFinal, lightToTemperatureMap);
transformedFinal = transform(transformedFinal, temperatureToHumidityMap);
transformedFinal = transform(transformedFinal, humidityToLocationMap, true);
console.log("transformedFinal:" + transformedFinal);
console.log("output: " + output);
function readLineNumbers(completeLine) {
    let numbers = [];
    var tNumbers = completeLine.split(":").toString().split(" ");
    //console.log(completeLine);
    tNumbers.forEach((number) => {
        if (!isNaN(parseInt(number))) {
            let nNumber = parseInt(number);
            numbers.push(nNumber);
        }
    });
    return numbers;
}
function transform(sourceData, transformationMap, finalTransformation = false) {
    let transformedData = [];
    sourceData.forEach(source => {
        let processedNumber = -1;
        transformationMap.forEach(map => {
            var start = map[1];
            var end = map[1] + map[2];
            var diff = map[1] - map[0];
            if (source >= start && source < end) {
                processedNumber = source - diff;
            }
        });
        if (processedNumber == -1)
            processedNumber = source;
        transformedData.push(processedNumber);
        if (finalTransformation && (output == -1 || processedNumber < output)) {
            output = processedNumber;
        }
    });
    return transformedData;
}
//# sourceMappingURL=index.js.map