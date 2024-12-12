/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/
console.log("3.ts");

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

const person = { name: "Alice", age: 30 };
const job = { role: "Developer", company: "TechCorp" };

const mergedObject = merge(person, job);
console.log(mergedObject);

export {};

console.log("______________________________________");
