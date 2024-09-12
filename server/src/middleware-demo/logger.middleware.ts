import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  /* 通过构造函数依赖注入 */
  // constructor(private readonly someService: SomeService) {}

  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}

// 当中间件不需要依赖注入或其他额外方法时可以使用纯函数形式
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
}
