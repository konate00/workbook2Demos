"use strict";

console.log("Before function declaration");
function showGreetingInConsole()
{
    let message = ("Hello World");
    console.log(message);
}
console.log("After function declaration before function invocation");

showGreetingInConsole();    //In order for ln 4 to be executed

console.log("After function invocation");
