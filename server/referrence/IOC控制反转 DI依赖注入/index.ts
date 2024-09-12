/**
 * B 中代码的实现是需要依赖 A 的，两者的代码耦合度非常高。
 * 当两者之间的业务逻辑复杂程度增加的情况下，维护成本与代码可读性都会随着增加，并且很难再多引入额外的模块进行功能拓展。
 */
class A {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class B {
  age: number;
  entity: A;
  constructor(age: number) {
    this.age = age;
    this.entity = new A('小满');
  }
}

const c = new B(18);

console.log(c.entity.name);

//================================== 控制反转 ==================================

class A2 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class C2 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
//中间件用于解耦
class Container {
  modeuls: any;
  constructor() {
    this.modeuls = {};
  }
  provide(key: string, modeuls: any) {
    this.modeuls[key] = modeuls;
  }
  get(key) {
    return this.modeuls[key];
  }
}

const mo = new Container();
mo.provide('a', new A2('小满1'));
mo.provide('c', new C2('小满2'));

class B2 {
  a: any;
  c: any;
  constructor(container: Container) {
    this.a = container.get('a');
    this.c = container.get('c');
  }
}

new B2(mo);

export {};
