/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

console.log("Task5:");
let value: string | number;
let userStatus: "enable" | "disable";

value = "Text";
console.log("value:", value);

userStatus = "enable";
console.log("userStatus:", userStatus);
console.log("______________________________________");
