import { Module } from '@nestjs/common';
import { ModulesDemo2Service } from './modules-demo2.service';
import { ModulesDemo2Controller } from './modules-demo2.controller';
import { ModulesDemo1Module } from '../modules-demo1/modules-demo1.module';

/* 模块默认是可被共享的 */
@Module({
  imports: [ModulesDemo1Module],
  controllers: [ModulesDemo2Controller],
  providers: [ModulesDemo2Service],
})
export class ModulesDemo2Module {}
