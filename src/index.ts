export {};

// Cannot invoke an object which is possibly 'undefined' in TS

// EXAMPLE 1 - Use the optional chaining (?.) operator to solve the error

type Employee = {
  doWork?: () => void;
};

const employee: Employee = {};

// ✅ Works now
employee.doWork?.();

// ---------------------------------------------------

// // EXAMPLE 2 - Using a type guard to solve the error

// type Employee = {
//   doWork?: () => void;
// };

// const employee: Employee = {};

// const result = employee.doWork && employee.doWork();
// console.log(result);
