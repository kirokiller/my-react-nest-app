import { Module } from '@nestjs/common';
import { ModulesDemo1Service } from './modules-demo1.service';
import { ModulesDemo1Controller } from './modules-demo1.controller';

@Module({
  controllers: [ModulesDemo1Controller],
  providers: [ModulesDemo1Service],
  /* 任何导入ModulesDemo1Module的模块，将获得并共享同一个ModulesDemo1Service实例 */
  exports: [ModulesDemo1Service],
})
export class ModulesDemo1Module {}
