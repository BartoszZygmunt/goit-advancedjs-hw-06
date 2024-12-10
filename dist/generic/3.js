/*
  У вас є функція merge, яка поєднує два об'єкти.
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/
function merge(objA, objB) {
    return { ...objA, ...objB };
}
const person = { name: "Alice", age: 30 };
const job = { role: "Developer", company: "TechCorp" };
const mergedObject = merge(person, job);
console.log(mergedObject);
export {};
//# sourceMappingURL=3.js.map