import { Module } from '@nestjs/common';
import { ModulesDemo1Module } from './modules-demo1/modules-demo1.module';
import { ModulesDemo2Module } from './modules-demo2/modules-demo2.module';
import { ModulesDemoController } from './modules-demo.controller';
import { ModulesDemoService } from './modules-demo.service';

/* TODO 全局模块、动态模块 */
/* 模块重新导出 */
@Module({
  imports: [ModulesDemo1Module, ModulesDemo2Module],
  exports: [ModulesDemo1Module, ModulesDemo2Module],
  controllers: [ModulesDemoController],
  providers: [ModulesDemoService],
})
export class ModulesDemoModule {
  /**
   * 模块class 也可以注入providers，比如出于配置目的
   * 由于循环依赖，模块本身不能像providers一样被注入
   */
  constructor(private modulesDemoService: ModulesDemoService) {}
}
