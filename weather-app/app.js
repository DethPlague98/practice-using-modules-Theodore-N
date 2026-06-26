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
