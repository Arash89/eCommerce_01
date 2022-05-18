/* eslint-disable */

import chalk from 'chalk'
// const chalk = require("chalk")

console.blue = function(...args) {return console.log(chalk.blueBright(...args))}
console.green = function(...args) {return console.log(chalk.greenBright(...args))}
console.red = function(...args) {return console.log(chalk.redBright(...args))}
console.yellow = function(...args) {return console.log(chalk.yellowBright(...args))}
console.cyan = function(...args) {return console.log(chalk.cyanBright(...args))}

const J = function (...args) {
  return args.map(elem => JSON.stringify(elem, null, 2))
}

console.J = function (...args) {
  return console.log(J(...args))
}

console.blueJ = function(...args) {return console.log(chalk.blueBright(J(...args)))}
// console.orangeJ = function(...args) {return console.log(chalk.hex('#FF8800').bold(J(...args)))}
console.orangeJ = function(...args) {return console.log(chalk.hex('#FFaa00').visible(J(...args)))}
console.pinkJ = function(...args) {return console.log(chalk.hex('#ff1694').visible(J(...args)))}
console.greenJ = function(...args) {return console.log(chalk.greenBright(J(...args)))}
console.redJ = function(...args) {return console.log(chalk.redBright(J(...args)))}
console.yellowJ = function(...args) {return console.log(chalk.yellowBright(J(...args)))}
console.cyanJ = function(...args) {return console.log(chalk.cyanBright(J(...args)))}


export const myLog = console

// module.exports = myLog

export const cLog = {}

cLog.blue = function(...args) {return console.log(`%c${args.join(" ")}`, "color:blue")}
cLog.green = function(...args) {return console.log(`%c${args.join(" ")}`, "color:green")}
cLog.red = function(...args) {return console.log(`%c${args.join(" ")}`, "color:red")}
cLog.yellow = function(...args) {return console.log(`%c${args.join(" ")}`, "color:yellow")}
cLog.cyan = function(...args) {return console.log(`%c${args.join(" ")}`, "color:cyan")}
cLog.orange = function(...args) {return console.log(`%c${args.join(" ")}`, "color:orange")}
cLog.pink = function(...args) {return console.log(`%c${args.join(" ")}`, "color:pink")}

cLog.blueLight = function(...args) {return console.log(`%c${args.join(" ")}`, "color:blue; background: #ccc")}
cLog.greenLight = function(...args) {return console.log(`%c${args.join(" ")}`, "color:green; background: #ccc")}
cLog.redLight = function(...args) {return console.log(`%c${args.join(" ")}`, "color:red; background: #ccc")}
cLog.yellowLight = function(...args) {return console.log(`%c${args.join(" ")}`, "color:yellow; background: #ccc")}
cLog.cyanLight = function(...args) {return console.log(`%c${args.join(" ")}`, "color:cyan; background: #ccc")}
cLog.orangeLight = function(...args) {return console.log(`%c${args.join(" ")}`, "color:#fff; background: orange")}
