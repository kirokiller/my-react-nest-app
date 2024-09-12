import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MiddlewareDemoService } from './middleware-demo.service';
import { MiddlewareDemoController } from './middleware-demo.controller';
import { LoggerMiddleware } from './logger.middleware';

/**
 * 当使用express 适配器时，nestjs 默认 从body-parser 包中注册 json 和 urlencoded。
 * 如果你想通过 MiddlewareConsumer 自定义该中间件，则需要在使用 NestFactory.create() 创建应用时通过将 bodyParser 标志设置为 false 来关闭全局中间件
 *  const app = await NestFactory.create(AppModule, {
 *    bodyParser: false,
 *  });
 */
@Module({
  controllers: [MiddlewareDemoController],
  providers: [MiddlewareDemoService],
})
export class MiddlewareDemoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    /**
     * forRoutes() 方法可以接受单个字符串、多个字符串、一个 RouteInfo 对象、一个控制器类甚至多个控制器类
     * 路径与controller path 用法一致，支持路由通配符
     */
    consumer
      /* 多个中间件逗号分隔 */
      .apply(LoggerMiddleware)
      /* 排除路由 */
      .exclude({ path: 'middleware-demo', method: RequestMethod.POST })
      .forRoutes('middleware-demo');
  }
}

/**
 * 使用app.use(middleware) 可绑定全局中间件
 */
