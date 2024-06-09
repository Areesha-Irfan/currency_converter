#! /usr/bin/env node 
import inquirer from "inquirer";

const currency : any = {
    USD :   1,
    PKR :  280,
    EUR :  0.91,
    INR : 74.57,
    GBD : 0.76
};

let ans = await inquirer.prompt(
 [
 
   {
        name : "from",
        message : "Enter from currency",
        type : "list",
        choices : ["USD", "PKR", "EUR", "INR", "GBD"]

    },
    {

        name : "to",
        message : "Enter to currency",
        type : "list",
        choices : ["USD", "PKR", "EUR", "INR", "GBD"]
       
    },
    {
        name : "amount",
        type : "number",
        message : "Enter your amount"

    }
 
 ]

);

let fromAmount = currency[ans.from];
let toAmount = currency[ans.to]; 
let useramount = ans.amount;
let baseAmount = useramount / fromAmount;  //USD base currency
let convertedAmount = baseAmount * toAmount;
let amountWithoutDecimal = Math.floor(convertedAmount);
console.log(amountWithoutDecimal);




