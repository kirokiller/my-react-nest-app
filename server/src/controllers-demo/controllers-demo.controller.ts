import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  HttpCode,
  Redirect,
  Header,
  Query,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ControllersDemoService } from './controllers-demo.service';
import { CreateControllersDemoDto } from './dto/create-controllers-demo.dto';
import { UpdateControllersDemoDto } from './dto/update-controllers-demo.dto';
import { Request, Response } from 'express';

// 路由 指定统一的路径前缀
@Controller('controllers-demo')
export class ControllersDemoController {
  constructor(
    /**
     * 依赖注入
     * private 语法的使用。这种简写允许我们立即在同一位置声明和初始化 catsService 成员
     */
    private readonly controllersDemoService: ControllersDemoService,
  ) {}

  @Post()
  /** 标头 */
  @Header('Cache-Control', 'none')
  /** 状态码 */
  @HttpCode(200) // 改变POST请求 默认返回code 201
  create(@Body() createControllersDemoDto: CreateControllersDemoDto) {
    return this.controllersDemoService.create(createControllersDemoDto);
  }

  /**
   * 使用此内置方法，当请求处理程序返回 JavaScript 对象或数组时，它将自动序列化为 JSON。然而，当它返回 JavaScript 基本类型（例如 string、 number、 boolean）时，
   * Nest 将仅发送该值，而不尝试对其进行序列化。这使得响应处理变得简单：只需返回值，Nest 就会处理剩下的事情。
   *
   * 此外，默认情况下，响应的状态代码始终为 200，但使用 201 的 POST 请求除外。我们可以通过在处理程序级别添加 @HttpCode(...) 装饰器来轻松更改此行为（请参阅 状态代码）。
   */
  /*
    req 请求对象 https://expressjs.com/en/api.html#req
  
    专用装饰器
    | `@Request(), @Req()`      | `req`                               |
    | ------------------------- | ----------------------------------- |
    | `@Response(), @Res()`*    | `res`                               |
    | `@Next()`                 | `next`                              |
    | `@Session()`              | `req.session`                       |
    | `@Param(key?: string)`    | `req.params` / `req.params[key]`    |
    | `@Body(key?: string)`     | `req.body` / `req.body[key]`        |
    | `@Query(key?: string)`    | `req.query` / `req.query[key]`      |
    | `@Headers(name?: string)` | `req.headers` / `req.headers[name]` |
    | `@Ip()`                   | `req.ip`                            |
    | `@HostParam()`            | `req.hosts`                         |
  */
  /**
   * Nest提供的HTTP方法装饰器
   * @Get()、@Post()、@Put()、@Delete()、@Patch()、@Options() 和 @Head()
   * 此外定义了端点@All()来处理所有的这些
   * 拓展链接 [HTTP请求方法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods)
   */

  /**
   * @Res()装饰器使用特定库的响应对象处理响应，主要缺点是你的代码变得依赖于平台（因为底层库在响应对象上可能有不同的 API），
   * 将失去与依赖于 Nest 标准响应处理的 Nest 功能的兼容性，例如拦截器和 @HttpCode() / @Header() 装饰器。
   * 要解决此问题，你可以将 passthrough 选项设置为 true
   */
  @Get()
  findAll(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return this.controllersDemoService.findAll();
  }

  /**
   * 路由通配符
   * 仅 express 支持路由中间的通配符。
   */
  @Get('ab*cd')
  routeWildcards() {
    return 'This route uses a wildcard';
  }

  @Get('redirect')
  /**
   * 重定向
   * 有效的返回值将覆盖@Redirect()装饰器内的参数
   */
  @Redirect('https://nest.nodejs.cn', 301)
  redirect(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'http://www.baidu.com/' };
    }
  }

  /** 路由参数 */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.controllersDemoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateControllersDemoDto: UpdateControllersDemoDto,
  ) {
    return this.controllersDemoService.update(+id, updateControllersDemoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.controllersDemoService.remove(+id);
  }
}
