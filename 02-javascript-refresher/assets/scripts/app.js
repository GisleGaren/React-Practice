import { apiKey, abc } from "./util.js";

console.log(apiKey + " " + abc);

// If we had a default export, we can simply do:
// import apiKey from "./util.js";
// Could also import all into one JS object by doing:
// import * as util from "./util.js";

// Do bear in mind we can have default imports and exports and normal ones at the same time