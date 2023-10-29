#! usr/bin/env node
import inquirer from "inquirer";
import { sum } from "./operator/add.js";
import { sub } from "./operator/sub.js";
import { mul } from "./operator/mul.js";
import { div } from "./operator/div.js";

let question:{num1:number,num2:number,operator:string} = await inquirer.prompt([

{
 message:"enter the first number",
 type:"number",
 name:"num1"

},
{
    message:"enter the second number",
    type:"number",
    name:"num2"
   
   },

   {
    message:"select operator",
    type:"list",
    choices:["+","-","/","*"],
    name:"operator"
   
   }

])
question.num1
if (question.operator === "+"){
    let result=sum(question.num1,question.num2)
    console.log(result)
}
else if (question.operator === "-"){
    let result=sub(question.num1,question.num2)
    console.log(result)
}
else if (question.operator === "/"){
    let result=div(question.num1,question.num2)
    console.log(result)
}
else if (question.operator === "*"){
    let result=mul(question.num1,question.num2)
    console.log(result)
}





























































































