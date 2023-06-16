import { apiKey, abc } from "./util.js";

console.log(apiKey + " " + abc);

// If we had a default export, we can simply do:
// import apiKey from "./util.js";
// Could also import all into one JS object by doing:
// import * as util from "./util.js";

// We could then access everything using console.log(util.)
// Here util. will display all available imports after we write .
// That way we could have for example console.log(util.apiKey)

// Do bear in mind we can have default imports and exports and normal ones at the same time

// Coding exercise 2 React Course Udemy
function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    const transform = numberArray.map((item) => ({val : item}));
    return transform;
}

const a = [1, 2, 3]
console.log(transformToObjects(a))