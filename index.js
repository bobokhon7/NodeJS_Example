// /////////////////Module package CORE //////////////////////////////

let number = 0;
setInterval(function () {
  console.log("result", number);
  number++;
}, 3);

// const fs = require("fs");
// const { networkInterfaces } = require("os");
// const data = fs.readFileSync("./input.txt", "utf8");

// console.log(data);

// console.log("------");

// fs.writeFileSync("./input.txt", `${data} \n\t\t Bobokhon`);
// const new_data = fs.readFileSync("./input.txt", "utf8");
// console.log(new_data);

///////////////////////////// Module package EXTERNAL //////////////////////////////

// const moment = require("moment");
// const time = moment().format();
// console.log(time);

// const inquirer = require("inquirer");
// inquirer
//   .prompt([{ type: "input", name: "raqam", message: "raqam kiriring" }])
//   .then((answer) => {
//     console.log("result", answer.raqam);
//   })
//   .catch((err) => console.log(err));

// const validator = require("validator");
// const test = validator.isEmail("foo@bar.com");

// console.log("test", test);

////////////////////////////////  Module package FILE ///////////////////////////////////

// const calculateValue = require("./hisob.js");

// const result = calculateValue.addValue(12, 3);
// console.log("result", result);

// const Account = require("./account");

// Account.tellMeTime();

// console.log("========");
// const myAccount = new Account("David", 334566, 123456789);

// myAccount.depositMoney(222222);
