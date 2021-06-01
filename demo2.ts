// 1 基础类型 
const age: number = 27
const myName: string = 'sunding'
const isITBoy: boolean = true

// 2 对象类型 
// 四种类型：对象类型、数组类型、类类型、函数类型
interface ITBoy {
  name: string;
  age: number;
}

const author: ITBoy = {
  name: 'sunding',
  age: 27,
}

const friends: string[] = ['a', 'b', 'c']

class Person {}
// person必须是Person类的实例
const person: Person = new Person()

const getName: () => string = () => myName;
console.log(getName());
