装饰器元数据

Q: nest 是如何获取到controller构造函数中service对应的类的
A: 利用了typescript emitDecoratorMetadata特性，通过reflect-metadata读取元数据

参考链接：https://www.typescriptlang.org/tsconfig/#emitDecoratorMetadata

tsconfig开启以下特性

- "emitDecoratorMetadata": true,
- "experimentalDecorators": true,



```typescript
import "reflect-metadata";

function LogType(target: any, propertyKey: string | symbol, parameterIndex: number) {
  const existingTypes = Reflect.getOwnMetadata("design:paramtypes", target, propertyKey) || [];

  console.log(`Parameter index ${parameterIndex} type: ${existingTypes[parameterIndex]?.name}`);
}

class MyService {
  myMethod(@LogType param1: string, @LogType param2: number) {}
}

// Output will be:
// Parameter index 0 type: String
// Parameter index 1 type: Number
```

```typescript
import "Reflect-metadata";

type constructor<T = any> = new (...args: Array<any>) => T;

@log
class A {
  @log
  static n: string = "hello";
  constructor(private m: string) {
    // ...
  }
  @log
  getMes(mes: number): number {
    return mes;
  }
}
function log<T>(
  constructor: constructor<T> | {},
  propertyName?: string,
  descriptor?: PropertyDescriptor
) {
  let type: Function, paramtypes: Array<Function>, returntype: Function;
  type = Reflect.getMetadata("design:type", constructor, propertyName!);
  if (descriptor) {
    paramtypes = Reflect.getMetadata("design:paramtypes", constructor, propertyName!);
    returntype = Reflect.getMetadata("design:returntype", constructor, propertyName!);
    console.log(propertyName, type, paramtypes, returntype);
  } else {
    if (propertyName) {
      console.log(propertyName, type);
    } else {
      paramtypes = Reflect.getMetadata("design:paramtypes", constructor);
      console.log(constructor, paramtypes);
    }
  }
}

export {};

/* 输出结果
getMes [Function: Function] [ [Function: Number] ] [Function: Number]

n [Function: String]

[Function: A] { n: 'hello' } [ [Function: String] ]
*/

```

