import { Controller, Get } from '@nestjs/common';
import { ModulesDemo2Service } from './modules-demo2.service';
import { ModulesDemo1Service } from '../modules-demo1/modules-demo1.service';

@Controller('modules-demo2')
export class ModulesDemo2Controller {
  constructor(
    private readonly modulesDemo2Service: ModulesDemo2Service,
    private readonly modulesDemo1Service: ModulesDemo1Service,
  ) {}

  @Get()
  findAll() {
    return this.modulesDemo1Service.get();
  }
}
