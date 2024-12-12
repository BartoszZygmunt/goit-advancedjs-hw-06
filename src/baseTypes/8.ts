/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

type Gender = "male" | "female";
let myGender: Gender;

myGender = "male";

export {};

console.log("Task8:");
console.log("myGender:", myGender);
console.log("______________________________________");
