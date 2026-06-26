//Required Modules

const yargs = require("yargs");
const chalk = require("chalk");

//Command Line Parsing

const {hideBin} = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).option("city", {
  alias: "c",
  type: "string",
  description: "name of city",
  demandOption: true,
}).parse()

//Weather Data
function getWeather(city){
 const weatherData = {
    "New York": {
        temperature: "75°F",
        condition: "Sunny"
    },
    "Chicago": {
        temperature: "65°F",
        condition: "Cloudy"
    },
    "Los Angeles":{
        temperature: "85°F",
        condition: "Clear Skies"
    },
    "Miami":{
        temperature: "90°F",
        condition: "Humid"
    }
 } 

 return weatherData[city] || {temperature: "City not found", condition: "City not found"}
}

 const cityCurrent = argv.city;
 const weather = getWeather(cityCurrent);
 
 //console.log(
   // chalk.green("Weather report for: ")
 //)

 console.log(chalk.blue(`City Temperature: ${weather.temperature}`));
 console.log(chalk.green(`City Conditions: ${weather.condition}`))

 /*
1. Purpose of package.json:
   - package.json stores important project information, including the list of dependencies.
   - It allows npm to know which modules the project needs.
   - It ensures that anyone who downloads the project can install the correct dependencies.

2. Why node_modules should NOT be included in version control:
   - node_modules contains thousands of files and would not be a good way to store code efficiently
   - All dependencies can be restored automatically using package.json.

3. How `npm install` reinstalls dependencies and why it matters:
   - When node_modules is deleted, running `npm install` reads package.json
     and reinstalls every dependency listed.
   - This is crucial for projects between multiple people because teammates can clone
     the repo and run `npm install` to get the exact same environment.
*/