/* const amount=9;
if(amount<10){
    console.log("number is small");
}else{
    console.log("number is large");
}
console.log("this is my first app!!"); */

/* console.log(module);
setInterval(()=>{
    console.log("hellow");
},1000);
 */

/* const names = require("./4-name");
const sayHi = require("./5-name");
console.log(names)
console.log(sayHi)

sayHi.sayHi("susan");
sayHi.sayHi(names.john);
sayHi.sayHi(names.peter);
 */

 /* const os = require("os");
 console.log(os); */
 /* const path = require("path");
 console.log(path.sep); */
 const fss = require("fs");
 
 const first = fss.readFileSync("./content/first.txt","utf8");
 const second = fss.readFileSync("./content/second.txt","utf8");
console.log(first,second);
fss.writeFileSync("./content/result.txt",`ksdvkshgvdgshvjd: ${first}`);