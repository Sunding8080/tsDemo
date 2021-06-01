/**
类型注解和类型推断
如果 TS 能够自动分析变量类型， 我们就什么也不需要做了
如果 TS 无法分析变量类型的话， 我们就需要使用类型注解
**/

const getTotal = (one:number, two:number) => one + two;
const total = getTotal(1, 2);

/**
 * 函数没有返回值 void
 * **/ 
function sayHello() {
  console.log("hello world");
}

/**
 * 函数是永远也执行不完的
 * **/
 function errorFuntion(): never {
  throw new Error();
  console.log("Hello World");
}

function forNever(): never {
  while (true) {}
  console.log("Hello JSPang");
}

const add = ({ one, two }: { one: number, two: number}) => one + two

const total2 = add({ one: 1, two: 2 });
