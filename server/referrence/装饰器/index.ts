// 最新规范定义
// declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
// declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
// declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// declare type ParameterDecorator = (target: Object, propertyKey: string | symbol | undefined, parameterIndex: number) => void;

/** 类装饰器 */
function classDeractor(target: any) {
  console.log('classDeractor:', target);
  target.prototype.name = 'classDeractor';
}

/** 属性装饰器 */
function prototypeDeractor(target: any, propertyKey: any) {
  console.log('prototypeDeractor:', target, propertyKey);
}

/** 方法装饰器 */
function methodDeractor(target: any, propertyKey: any, descriptor: any) {
  console.log('methodDeractor:', target, propertyKey, descriptor);
  descriptor.value = function () {
    console.log('do replace method');
  };
}

/** 参数装饰器 */
function parameterDecorator(
  target: any,
  propertyKey: any,
  parameterIndex: number,
) {
  console.log('parameterDecorator:', target, propertyKey, parameterIndex);
}

@classDeractor
class A {
  @prototypeDeractor
  readonly name: string = 'default';
  constructor(name: string) {
    this.name = name;
  }

  @methodDeractor
  method() {
    console.log('do method');
  }

  add(@parameterDecorator a: number, @parameterDecorator b: number) {
    return a + b;
  }
}

const a = new A('小满');
console.log('a.name:', a.name);
a.method();
console.log(a.add(1, 2));

export {};
